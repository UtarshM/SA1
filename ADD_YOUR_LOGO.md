# 📸 How to Add Your Scalezix Logo

## 🎯 Quick Steps

### Option 1: Replace Existing File (Recommended)
1. Save your Scalezix logo image (the one you shared)
2. Name it: `scalezix-logo.webp` or `scalezix-logo.png`
3. Copy it to the `public/` folder
4. Replace the existing file

### Option 2: Add New File
1. Save your logo as `scalezix-main-logo.png`
2. Copy to `public/` folder
3. Update the code (see below)

---

## 📁 Where to Put the Logo

```
your-project/
├── public/
│   ├── scalezix-logo.webp  ← Replace this file
│   └── (or add your new logo here)
```

---

## 🖼️ Logo Requirements

### Format
- **Preferred:** PNG with transparent background
- **Alternative:** WebP, JPG, SVG

### Size
- **Minimum:** 200px width
- **Recommended:** 400-800px width
- **Aspect Ratio:** Keep original (don't stretch)

### Background
- **Transparent** (PNG) works best
- Will be inverted to white in footer

---

## 🔧 If You Want to Use a Different Filename

### Update Header (`src/components/Header.tsx`)
Change line ~38:
```tsx
// FROM:
src="/scalezix-logo.webp"

// TO:
src="/your-logo-filename.png"
```

### Update Footer (`src/components/Footer.tsx`)
Change line ~48:
```tsx
// FROM:
src="/scalezix-logo.webp"

// TO:
src="/your-logo-filename.png"
```

---

## 📱 Current Responsive Sizes

### Header Logo
- **Mobile (< 640px):** 32px height (`h-8`)
- **Small (640px+):** 40px height (`h-10`)
- **Medium (768px+):** 48px height (`h-12`)
- **Large (1024px+):** 56px height (`h-14`)

### Footer Logo
- **Mobile (< 640px):** 48px height (`h-12`)
- **Small (640px+):** 56px height (`h-14`)
- **Medium (768px+):** 64px height (`h-16`)
- **Large (1024px+):** 80px height (`h-20`)

---

## 🎨 Logo Display

### Header (Light Background)
- Shows logo in **original colors**
- Black text with arrow
- On white/transparent background

### Footer (Dark Background)
- Shows logo **inverted to white**
- Uses `brightness-0 invert` CSS
- On dark gray-900 background

---

## 🧪 Testing Your Logo

### After Adding Logo:
1. Save logo to `public/` folder
2. Run: `npm run dev`
3. Check header (top left)
4. Scroll to footer (bottom)
5. Test on mobile (resize browser)

### Mobile Testing:
- Open browser DevTools (F12)
- Click device toolbar icon
- Select iPhone/Android
- Check logo sizes

---

## 🔄 Fallback System

If your main logo fails, it automatically uses backup:

```tsx
onError={(e) => {
  e.currentTarget.src = '/sa2_logo-removebg-preview.png';
}}
```

**Backup files available:**
- `/sa2_logo-removebg-preview.png`
- `/scalezix-academy-logo.png`
- `/sa2 logo.webp`

---

## 💡 Tips

### For Best Results:
1. **Use PNG** with transparent background
2. **High resolution** (at least 400px wide)
3. **Clean edges** (no artifacts)
4. **Proper cropping** (no extra whitespace)

### Logo Colors:
- **Header:** Keep original (black works best)
- **Footer:** Will be inverted to white automatically

---

## 🚀 Quick Replace Command

If you have your logo ready:

```bash
# Copy your logo to public folder
cp /path/to/your/logo.png public/scalezix-logo.png

# Or if it's webp
cp /path/to/your/logo.webp public/scalezix-logo.webp

# Rebuild
npm run build
```

---

## 📸 Your Logo Image

The logo you shared shows:
```
Scalezix (with arrow ↗)
```

**To use it:**
1. Save that image
2. Name it `scalezix-logo.png`
3. Copy to `public/` folder
4. Done! ✅

---

## ✅ Checklist

- [ ] Logo image saved
- [ ] Copied to `public/` folder
- [ ] Named correctly (`scalezix-logo.webp` or `.png`)
- [ ] Tested in browser
- [ ] Checked mobile view
- [ ] Verified header visibility
- [ ] Verified footer visibility

---

## 🆘 Troubleshooting

### Logo Not Showing?
1. Check filename matches exactly
2. Verify file is in `public/` folder
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for errors

### Logo Too Small/Large?
Adjust the responsive classes in:
- Header: `h-8 sm:h-10 md:h-12 lg:h-14`
- Footer: `h-12 sm:h-14 md:h-16 lg:h-20`

### Logo Wrong Color?
- Header: Remove `brightness-0 invert`
- Footer: Keep `brightness-0 invert` for white

---

**Need Help?** Just ask! 🙋‍♂️

**Last Updated:** December 24, 2025
