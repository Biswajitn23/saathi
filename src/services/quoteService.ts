// Quote Database Service - Uses localStorage with optional backend sync
// For production, replace with MongoDB/Firebase/Supabase

export interface Quote {
  id: string;
  name: string;
  email: string;
  phone: string;
  project: string;
  budget: string;
  message?: string;
  date: string;
  status: "New" | "Processing" | "Completed" | "Rejected";
  createdAt: number;
}

const STORAGE_KEY = "saathi_quotes";
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

class QuoteService {
  // Fetch all quotes from localStorage (and optionally sync with backend)
  async getAllQuotes(): Promise<Quote[]> {
    try {
      // Try to fetch from backend if available
      if (import.meta.env.PROD) {
        const response = await fetch(`${API_BASE}/quotes`, {
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const quotes = await response.json();
          // Cache in localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
          return quotes;
        }
      }
    } catch (error) {
      console.warn("Backend not available, using localStorage", error);
    }

    // Fallback to localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : this.getDefaultQuotes();
  }

  // Save a new quote
  async saveQuote(quote: Omit<Quote, "id" | "createdAt">): Promise<Quote> {
    const newQuote: Quote = {
      ...quote,
      id: `QT-${Date.now()}`,
      createdAt: Date.now(),
    };

    try {
      // Try to sync with backend
      if (import.meta.env.PROD) {
        const response = await fetch(`${API_BASE}/quotes`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newQuote),
        });
        if (response.ok) {
          return await response.json();
        }
      }
    } catch (error) {
      console.warn("Backend not available, saving to localStorage", error);
    }

    // Fallback: save to localStorage
    const allQuotes = await this.getAllQuotes();
    allQuotes.push(newQuote);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allQuotes));

    return newQuote;
  }

  // Update quote status
  async updateQuoteStatus(id: string, status: Quote["status"]): Promise<Quote | null> {
    try {
      if (import.meta.env.PROD) {
        const response = await fetch(`${API_BASE}/quotes/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        });
        if (response.ok) {
          return await response.json();
        }
      }
    } catch (error) {
      console.warn("Backend not available, updating localStorage", error);
    }

    // Fallback: update in localStorage
    const quotes = await this.getAllQuotes();
    const quote = quotes.find((q) => q.id === id);
    if (quote) {
      quote.status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(quotes));
      return quote;
    }

    return null;
  }

  // Delete quote
  async deleteQuote(id: string): Promise<boolean> {
    try {
      if (import.meta.env.PROD) {
        const response = await fetch(`${API_BASE}/quotes/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          return true;
        }
      }
    } catch (error) {
      console.warn("Backend not available, deleting from localStorage", error);
    }

    // Fallback: delete from localStorage
    const quotes = await this.getAllQuotes();
    const filtered = quotes.filter((q) => q.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  }

  // Get default sample quotes
  private getDefaultQuotes(): Quote[] {
    return [
      {
        id: "QT-1092",
        name: "Rajesh Kumar",
        email: "rajesh@kumar.com",
        phone: "+91 98765 43210",
        project: "Commercial",
        budget: "Rs 2.5 Cr",
        message: "Looking for a reliable partner for our new office complex.",
        date: "28 Mar 2026",
        status: "New",
        createdAt: Date.now() - 86400000,
      },
      {
        id: "QT-1091",
        name: "Suresh Mehra",
        email: "s.mehra@realty.com",
        phone: "+91 97654 32109",
        project: "Residential",
        budget: "Rs 85 L",
        message: "Planning a residential complex with 50+ apartments.",
        date: "27 Mar 2026",
        status: "Processing",
        createdAt: Date.now() - 172800000,
      },
      {
        id: "QT-1090",
        name: "Anita Desai",
        email: "anita@indus.com",
        phone: "+91 96543 21098",
        project: "Industrial",
        budget: "Rs 5.2 Cr",
        message: "Need help with industrial warehouse construction.",
        date: "25 Mar 2026",
        status: "Completed",
        createdAt: Date.now() - 345600000,
      },
    ];
  }
}

export default new QuoteService();
