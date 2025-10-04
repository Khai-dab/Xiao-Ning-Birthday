# Birthday Greeting Website - Xiao Ning 🎉

An interactive birthday greeting website with animations and engaging games.

## 📁 File Structure

```
Xiao Ning/
├── index.html          # Main HTML file
├── style.css           # CSS file for styling
├── script.js           # JavaScript file for interactivity
├── images/             # Folder for images/GIFs & background
│   ├── pusn3.gif
│   ├── pusn2.gif
│   ├── terlope2.gif
│   ├── panah.gif
│   └── wpnime.jpeg     # Background image
├── photos/             # Folder for memory photos
│   └── README.txt      # Instructions for adding photos
├── music/              # Folder for background music
│   └── README.txt      # Instructions for adding music
└── README.md           # This documentation file
```

## ✨ Features

1. **Welcome Page** - Initial greeting with animated sticker
2. **Envelope Animation** - Openable envelope with hearts & sparkles animation
3. **Birth Year Input** - Interactive slider for birth year input
4. **Memory Game** - Card matching game with petal animations (random positions every time!)
5. **Memory Photo Gallery** - Photo slideshow with navigation & dots indicator
6. **Final Message** - Birthday message with typing effect and fireworks
7. **Background Music** - Music player with toggle button (🔇/🔊)
8. **Background Image** - Beautiful anime-style background image

## 🎨 Improvements from Original Version

### Better Structure
- ✅ **Separated code**: HTML, CSS, and JavaScript in separate files
- ✅ **Easier maintenance**: Each component is easy to modify
- ✅ **Cleaner code**: No inline styles or scripts

### Smoother Performance
- ✅ **Smoother animations**: Using cubic-bezier easing
- ✅ **Canvas optimization**: More stable frame rate
- ✅ **Smooth transitions**: All transitions use optimal CSS transitions

### Better Code Quality
- ✅ **Error handling**: Element validation before use
- ✅ **Clear comments**: Each code section is explained
- ✅ **Responsive design**: Adapts to various screen sizes
- ✅ **No redirect script**: Removed unnecessary redirect script

## 🚀 How to Use

1. **Preparation**:
   - Add memory photos to `photos/` folder (photo1.jpg, photo2.jpg, photo3.jpg)
   - Add MP3 music to `music/` folder (bg-music.mp3)
   - Read instructions in README.txt in each folder

2. **Running**:
   - Open `index.html` file in browser
   - Click music button (🔇) to play background music
   - Click "Start" button to begin
   - Open envelope by clicking "Open" button
   - Select birth year with slider
   - Complete memory game (card positions randomized every time!)
   - View memory photo slideshow (navigate with ❮ ❯ buttons)
   - Enjoy birthday message with fireworks animation!

## 🎯 How to Customize

### Change Messages
Edit this section in `script.js` (function `mulaiHal5`):
```javascript
const txtDoa = `Happy <b>${usiaKamu}th</b> Birthday! 🎉🎂`;
const txtPesanAkhir = "Your message here...";
const txtLucu = "Additional message...";
```

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --color-flap: #d46a84;
    --color-env: #f8e1e9;
    --color-env2: #D4AFB8;
    --color-heart: #ff6f91;
    --color-sparkle: #ffd1dc;
}
```

### Change Background
Replace background URL in `index.html`:
```html
<div class="background-overlay" data-src="YOUR_IMAGE_URL"></div>
```

### Change Sticker Images
Replace GIF files in `images/` folder with your own images (use same names or update path in `index.html`).

### Add Memory Photos
1. Prepare 3 photos (or more)
2. Rename: photo1.jpg, photo2.jpg, photo3.jpg
3. Add to `photos/` folder
4. Edit captions in `index.html` in `<p class="photo-caption">` section

### Add Background Music
**Recommended Song:** Lauv - Paris in the Rain
1. Download from YouTube: https://www.youtube.com/watch?v=H7HmzwI67ec
   - Use converter: https://ytmp3.nu/ or https://y2mate.com/
   - Format: MP3 (128kbps or 192kbps)
2. Rename file: bg-music.mp3
3. Add to `music/` folder
4. Music will auto-loop when music button is clicked (🔇 → 🔊)

## 🌐 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## 📱 Responsive

This website is responsive and accessible from:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

## 🎨 Dependencies

- **TypeIt** - Library for typing animation effects
- **Google Fonts** - Itim, Handlee, Sriracha

## 💡 Tips

- For best results, open in Chrome or Edge
- Ensure internet connection to load fonts and libraries
- Image files must be in `images/` folder

## 🐛 Troubleshooting

**Animations not working?**
- Ensure JavaScript is enabled in browser
- Check browser console for error messages

**Images not showing?**
- Ensure all GIF files are in `images/` folder
- Check image paths in `index.html`

**Fireworks not appearing?**
- Clear browser cache and refresh
- Ensure canvas is supported by browser

---

Made with ❤️ by Claude Code
