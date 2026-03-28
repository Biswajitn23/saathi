import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Settings,
  Search,
  Download,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  Trash2,
} from "lucide-react";
import quoteService, { type Quote } from "@/services/quoteService";

const QuoteAdmin = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  // Load quotes on component mount
  useEffect(() => {
    const loadQuotes = async () => {
      try {
        setLoading(true);
        const data = await quoteService.getAllQuotes();
        setQuotes(data);
        setFilteredQuotes(data);
      } catch (error) {
        console.error("Failed to load quotes:", error);
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, []);

  // Filter/search quotes
  useEffect(() => {
    let filtered = quotes;

    if (searchTerm) {
      filtered = filtered.filter(
        (q) =>
          q.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter) {
      filtered = filtered.filter((q) => q.status === statusFilter);
    }

    setFilteredQuotes(filtered);
  }, [quotes, searchTerm, statusFilter]);

  // Update quote status
  const handleStatusChange = async (id: string, newStatus: Quote["status"]) => {
    try {
      await quoteService.updateQuoteStatus(id, newStatus);
      const updated = await quoteService.getAllQuotes();
      setQuotes(updated);
    } catch (error) {
      console.error("Failed to update quote:", error);
    }
  };

  // Delete quote
  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this quote?")) {
      try {
        await quoteService.deleteQuote(id);
        const updated = await quoteService.getAllQuotes();
        setQuotes(updated);
      } catch (error) {
        console.error("Failed to delete quote:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f8f9fa]">
        <p className="text-slate-500">Loading quotes...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8f9fa] text-slate-900 font-sans">
      <aside className="w-64 bg-slate-900 text-white hidden lg:flex flex-col">
        <div className="p-8 border-b border-white/5">
          <h1 className="text-xl font-black tracking-tighter uppercase">
            SAATHI <span className="text-orange-600">ADMIN</span>
          </h1>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: FileText, label: "Quote Requests", active: false },
            { icon: Users, label: "Client List", active: false },
            { icon: Settings, label: "System Settings", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                item.active ? "bg-orange-600 text-white" : "text-slate-400 hover:bg-white/5"
              }`}
            >
              <item.icon size={16} /> {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-grow p-8">
        <header className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[10px] font-black text-orange-600 uppercase tracking-[0.3em] mb-2">
              Internal Control
            </p>
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              Quote Management
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
              <Download size={14} /> Export CSV
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Inquiries", val: quotes.length, icon: FileText, color: "text-blue-600" },
            { label: "Pending Review", val: quotes.filter((q) => q.status === "New").length, icon: Clock, color: "text-orange-600" },
            { label: "Conversion Rate", val: `${Math.round((quotes.filter((q) => q.status === "Completed").length / Math.max(quotes.length, 1)) * 100)}%`, icon: CheckCircle2, color: "text-green-600" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 border border-slate-200 shadow-sm rounded-sm relative overflow-hidden group"
            >
              <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <stat.icon size={64} />
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
                {stat.label}
              </p>
              <p className={`text-3xl font-black ${stat.color} tracking-tighter`}>{stat.val}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between bg-slate-50/50">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search Client or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs border border-slate-200 rounded-sm focus:ring-1 focus:ring-orange-500 outline-none"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter || ""}
                onChange={(e) => setStatusFilter(e.target.value || null)}
                className="px-4 py-2 bg-white border border-slate-200 text-[10px] font-black uppercase tracking-widest rounded-sm focus:ring-1 focus:ring-orange-500 outline-none"
              >
                <option value="">All Status</option>
                <option value="New">New</option>
                <option value="Processing">Processing</option>
                <option value="Completed">Completed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                  <th className="p-4">ID</th>
                  <th className="p-4">Client Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Budget Range</th>
                  <th className="p-4">Submission Date</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredQuotes.length > 0 ? (
                  filteredQuotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-xs font-black text-orange-600">{quote.id}</td>
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-slate-900">{quote.name}</span>
                          <span className="text-[10px] text-slate-400">{quote.email}</span>
                        </div>
                      </td>
                      <td className="p-4 text-[10px] font-bold uppercase text-slate-500">{quote.project}</td>
                      <td className="p-4 text-xs font-black text-slate-900">{quote.budget}</td>
                      <td className="p-4 text-xs text-slate-500 font-medium">{quote.date}</td>
                      <td className="p-4">
                        <select
                          value={quote.status}
                          onChange={(e) => handleStatusChange(quote.id, e.target.value as Quote["status"])}
                          className={`px-2 py-1 text-[9px] font-black uppercase tracking-widest rounded-full border-0 cursor-pointer ${
                            quote.status === "New"
                              ? "bg-orange-100 text-orange-600"
                              : quote.status === "Processing"
                                ? "bg-blue-100 text-blue-600"
                                : quote.status === "Completed"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-red-100 text-red-600"
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Processing">Processing</option>
                          <option value="Completed">Completed</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(quote.id)}
                          className="p-1 hover:bg-red-100 rounded-sm transition-colors text-slate-400 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-400">
                      No quotes found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
            <p className="text-[10px] font-bold text-slate-400 uppercase">Showing {filteredQuotes.length} of {quotes.length} Inquiries</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuoteAdmin;
