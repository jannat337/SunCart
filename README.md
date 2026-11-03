# ☀️ SunCart – Summer Essentials Store

## Purpose
SunCart is a modern summer eCommerce platform where users can browse seasonal
products such as sunglasses, summer outfits, skincare and beach accessories,
and view product details after authentication.

## Live URL
https://YOUR-LIVE-URL.vercel.app

## GitHub Repository
https://github.com/jannat337/SunCart

## Key Features
- Fully responsive layout (mobile, tablet, desktop) with persistent Navbar and Footer
- Hero slider with summer sale and hot deal banners
- Popular Products, Summer Care Tips and Top Brands sections
- Products page with 12 summer products
- Protected Product Details page (redirects to login, then back after login)
- Email/password authentication and Google social login (BetterAuth)
- My Profile page and Update Information feature
- Toast notifications and Animate.css animations
- Environment variables for all secret keys

## Tech Stack
Next.js (App Router), Tailwind CSS, DaisyUI, BetterAuth, MongoDB

## npm Packages Used
- next, react, react-dom
- tailwindcss
- daisyui
- better-auth
- mongodb
- react-hot-toast
- animate.css

## Getting Started
1. Clone the repo and run `npm install`
2. Create a `.env.local` file with:
   - MONGODB_URI
   - BETTER_AUTH_SECRET
   - BETTER_AUTH_URL
   - GOOGLE_CLIENT_ID
   - GOOGLE_CLIENT_SECRET
3. Run `npm run dev` and open http://localhost:3000