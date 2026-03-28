# Quote Database Integration Guide

## Overview
The Quote Admin page now uses a flexible database system that works in three ways:

1. **localStorage (Default)** - Client-side storage, no server needed
2. **Node.js/Express + MongoDB** - Production-ready backend
3. **Firebase/Supabase** - Alternative cloud solutions (can be added)

## Current Implementation

### Frontend (React)
- **Service**: `src/services/quoteService.ts`
- Uses localStorage by default
- Automatically syncs with backend API if available
- Features:
  - Save quotes
  - View all quotes
  - Update quote status (New → Processing → Completed/Rejected)
  - Delete quotes
  - Search and filter

### Admin Page (`/admin`)
- Dashboard with statistics
- Real-time quote management
- Interactive status updates
- Delete functionality

## Setup Options

### Option 1: localStorage Only (Current - No Setup Required)
Quotes are saved locally in browser storage. Perfect for testing.
- No server needed
- Data persists in browser
- Great for development

### Option 2: MongoDB + Node.js Backend (Recommended for Production)

#### Prerequisites:
- Node.js 14+
- MongoDB (local or Atlas cloud)

#### Steps:

1. **Set up MongoDB:**
   ```bash
   # Option A: Local MongoDB
   mongod
   
   # Option B: MongoDB Atlas
   # Sign up: https://www.mongodb.com/cloud/atlas
   # Create cluster and get connection string
   ```

2. **Set up Backend:**
   ```bash
   # Install dependencies
   npm install express cors mongodb dotenv
   
   # Create .env file
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/saathi
   PORT=3000
   
   # Run backend
   node backend.js
   ```

3. **Update Frontend .env:**
   ```bash
   # .env or .env.local
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Test:**
   - Backend health: `http://localhost:3000/api/health`
   - Quotes: `http://localhost:3000/api/quotes`
   - Visit admin page: `http://localhost:3000/admin`

#### MongoDB Collection Schema:
```javascript
{
  id: "QT-1692187200000",        // Unique quote ID
  name: "Client Name",            // Client name
  email: "email@example.com",     // Email
  phone: "+91 98765 43210",       // Phone
  project: "Commercial",          // Project type
  budget: "Rs 2.5 Cr",           // Budget
  message: "Details...",          // Message
  date: "28 Mar 2026",           // Formatted date
  status: "New",                  // Status: New, Processing, Completed, Rejected
  createdAt: timestamp,           // Creation time
  updatedAt: timestamp            // Last updated time
}
```

### Option 3: Cloud Solutions (Firebase/Supabase)

Coming soon! Can be integrated by updating `quoteService.ts` to use Firebase Realtime Database or Supabase PostgreSQL.

## API Endpoints

### GET /api/quotes
Fetch all quotes
```bash
curl http://localhost:3000/api/quotes
```

### POST /api/quotes
Create a new quote
```bash
curl -X POST http://localhost:3000/api/quotes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Rajesh",
    "email": "rajesh@example.com",
    "phone": "+91 98765 43210",
    "project": "Commercial",
    "budget": "Rs 2.5 Cr",
    "status": "New"
  }'
```

### PATCH /api/quotes/:id
Update quote status
```bash
curl -X PATCH http://localhost:3000/api/quotes/QT-1092 \
  -H "Content-Type: application/json" \
  -d '{"status": "Processing"}'
```

### DELETE /api/quotes/:id
Delete a quote
```bash
curl -X DELETE http://localhost:3000/api/quotes/QT-1092
```

## Features

✅ Non-encryption by default (No auth/encryption in basic setup)
✅ Quote CRUD operations
✅ Real-time status updates
✅ Search and filter
✅ Delete functionality
✅ Dashboard statistics
✅ Fallback to localStorage if backend unavailable

## Security Notes

For production deployment:
1. Add authentication (JWT, API keys)
2. Add MongoDB encryption at rest
3. Use HTTPS only
4. Validate all inputs on backend
5. Add rate limiting
6. Set up backup strategy

## Migration from localStorage to MongoDB

```javascript
// 1. Export localStorage data
const data = JSON.parse(localStorage.getItem('saathi_quotes'));

// 2. Use backend API to import
data.forEach(quote => {
  fetch('http://localhost:3000/api/quotes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quote)
  });
});

// 3. Clear localStorage when ready
localStorage.removeItem('saathi_quotes');
```

## Troubleshooting

**Backend not connecting?**
- Check MongoDB is running
- Verify MONGODB_URI in .env
- Check port 3000 is available

**API returning 404?**
- Ensure backend is running (`http://localhost:3000/api/health`)
- Check VITE_API_URL in frontend .env

**Data not persisting?**
- Using localStorage: Check browser storage (DevTools → Application)
- Using MongoDB: Check database in MongoDB Compass or Atlas

## Next Steps

1. Test with localStorage first
2. Set up backend when ready for production
3. Configure environment variables
4. Deploy backend to server (Heroku, Railway, etc.)
5. Update frontend API URL for production

---

For questions or issues, update `quoteService.ts` to add logging or additional error handling.
