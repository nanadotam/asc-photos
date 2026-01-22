# ASC Photos Gallery

A beautiful Next.js photo gallery website for the Ashesi Student Council, showcasing event photography and albums.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Managing Gallery Entries](#managing-gallery-entries)
  - [Understanding the Gallery Structure](#understanding-the-gallery-structure)
  - [Adding a New Gallery](#adding-a-new-gallery)
  - [Editing an Existing Gallery](#editing-an-existing-gallery)
  - [Removing a Gallery](#removing-a-gallery)
- [Managing Thumbnails](#managing-thumbnails)
- [Common Patterns & Examples](#common-patterns--examples)
- [Troubleshooting](#troubleshooting)

---

## Overview

This website displays a collection of photo galleries from various ASC events. Each gallery card links to an external photo album (typically hosted on Pixieset or Google Drive) and displays a thumbnail image, title, and description.

All gallery data is managed through a single TypeScript file: **`lib/gallery-data.ts`**

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Managing Gallery Entries

### Understanding the Gallery Structure

Open the file `lib/gallery-data.ts`. This file contains the `Gallery` interface and a function that returns all gallery entries.

#### The Gallery Interface

```typescript
export interface Gallery {
  id: number; // Unique identifier for the gallery
  title: string; // Display title shown on the card
  url: string; // External link to the photo album
  thumbnail?: string; // Path to the thumbnail image (optional)
  description?: string; // Short description (optional)
  photoCount?: number; // Number of photos in the album (optional)
}
```

#### Current Gallery Data

The galleries are defined in the `getGalleryLinks()` function as an array of `Gallery` objects.

---

### Adding a New Gallery

Follow these steps to add a new gallery to the website:

#### Step 1: Prepare Your Thumbnail Image

1. Choose a representative image for your gallery (recommended: landscape orientation, ~800px width)
2. Save the image to the `public/` folder with a descriptive filename
   - Example: `public/my-new-event.jpg`

#### Step 2: Add the Gallery Entry

Open `lib/gallery-data.ts` and add a new object to the array inside the `return` statement:

```typescript
return [
  // ... existing galleries ...

  // 👇 Add your new gallery entry here
  {
    id: 9, // Use the next available ID number
    title: "Your Event Name - Year",
    url: "https://your-photo-album-link.com/album",
    thumbnail: "/your-thumbnail-image.jpg",
    description: "Highlights from Your Event",
    photoCount: 100, // Optional: estimated photo count
  },
];
```

#### Step 3: Save and Test

1. Save the file
2. Run `npm run dev` to start the development server
3. Open `http://localhost:3000` to verify your new gallery appears

---

### Editing an Existing Gallery

To modify an existing gallery, locate the entry in `lib/gallery-data.ts` and update the desired fields:

#### Example: Update a Gallery's URL

```typescript
// Before
{
  id: 7,
  title: "Vals Day 2025",
  url: "https://drive.google.com/drive/folders/old-folder-id",
  thumbnail: "/ASH05539.jpg",
  description: "Highlights from Vals Day 2025",
  photoCount: 332,
},

// After - Updated URL
{
  id: 7,
  title: "Vals Day 2025",
  url: "https://drive.google.com/drive/folders/new-folder-id",  // ✅ Updated
  thumbnail: "/ASH05539.jpg",
  description: "Highlights from Vals Day 2025",
  photoCount: 400,  // ✅ Updated photo count
},
```

#### Editable Fields

| Field         | Description                       | Required    |
| ------------- | --------------------------------- | ----------- |
| `id`          | Unique number identifier          | ✅ Yes      |
| `title`       | Gallery title displayed on card   | ✅ Yes      |
| `url`         | Link to external photo album      | ✅ Yes      |
| `thumbnail`   | Path to image in `/public` folder | ❌ Optional |
| `description` | Short description text            | ❌ Optional |
| `photoCount`  | Number of photos (display only)   | ❌ Optional |

---

### Removing a Gallery

To remove a gallery, you have two options:

#### Option 1: Delete the Entry

Remove the entire object from the array:

```typescript
// Delete this entire block to remove the gallery
{
  id: 3,
  title: "POP CULTR - ASC WEEK 2025",
  url: "https://ashesistudentcouncil-pr.pixieset.com/popcultrascweek25/",
  thumbnail: "/ASC-WEEK-66.jpg",
  description: "Highlights from Popular Culture Day",
  photoCount: 136,
},
```

#### Option 2: Comment Out the Entry (Recommended for Temporary Removal)

Wrap the entry in comments to hide it temporarily while preserving the data:

```typescript
// {
//   id: 3,
//   title: "POP CULTR - ASC WEEK 2025",
//   url: "https://ashesistudentcouncil-pr.pixieset.com/popcultrascweek25/",
//   thumbnail: "/ASC-WEEK-66.jpg",
//   description: "Highlights from Popular Culture Day",
//   photoCount: 136,
// },
```

> **💡 Tip:** You can see an example of a commented-out entry in the current file (the "FAMILY FEUD" gallery on lines 49-56).

---

## Managing Thumbnails

### Where to Store Thumbnails

All thumbnail images should be placed in the `public/` folder at the root of the project.

```
asc-photos/
├── public/
│   ├── ASC-WEEK-44.jpg      ← Thumbnail images
│   ├── ASC-WEEK-452.jpg
│   ├── ASH05539.jpg
│   └── your-new-image.jpg   ← Add new images here
├── lib/
│   └── gallery-data.ts
└── ...
```

### Thumbnail Path Format

When referencing thumbnails in `gallery-data.ts`, use a **forward slash** followed by the filename:

```typescript
thumbnail: "/your-image-name.jpg",  // ✅ Correct
thumbnail: "public/your-image-name.jpg",  // ❌ Wrong
thumbnail: "./public/your-image-name.jpg",  // ❌ Wrong
```

### Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

### Recommended Image Specifications

| Property     | Recommendation   |
| ------------ | ---------------- |
| Width        | 800-1200px       |
| Aspect Ratio | 16:9 or 4:3      |
| File Size    | Under 200KB      |
| Format       | JPG (for photos) |

---

## Common Patterns & Examples

### Pixieset Album Link

```typescript
{
  id: 1,
  title: "Opening Night - ASC WEEK 2025",
  url: "https://ashesistudentcouncil.pixieset.com/openingnightascweek25/",
  thumbnail: "/ASC-WEEK-44.jpg",
  description: "Highlights from Opening Night",
  photoCount: 54,
},
```

### Google Drive Folder Link

```typescript
{
  id: 7,
  title: "Vals Day 2025",
  url: "https://drive.google.com/drive/folders/1NSHyqZavzEdsmJPQICdFO5V_c1MLMpVn?usp=sharing",
  thumbnail: "/ASH05539.jpg",
  description: "Highlights from Vals Day 2025",
  photoCount: 332,
},
```

### Gallery Without a Thumbnail

```typescript
{
  id: 10,
  title: "Behind the Scenes",
  url: "https://example.com/album",
  description: "Candid moments from planning",
  // thumbnail and photoCount are optional
},
```

---

## Troubleshooting

### Gallery Not Showing Up

1. **Check for syntax errors** – Ensure all commas, brackets, and quotes are correct
2. **Verify the ID is unique** – Each gallery must have a different `id` number
3. **Check the console** – Run `npm run dev` and check the terminal for errors

### Thumbnail Not Loading

1. **Verify the file exists** in the `public/` folder
2. **Check the path** – Should start with `/` (e.g., `/image.jpg`)
3. **Case sensitivity** – Filenames are case-sensitive (`Image.jpg` ≠ `image.jpg`)

### Build Errors

If you encounter TypeScript errors when building:

1. Ensure all required fields (`id`, `title`, `url`) are present
2. Check that `id` is a number, not a string
3. Verify the file syntax is valid TypeScript

```bash
# Check for errors
npm run build
```

---

## File Reference

| File                  | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| `lib/gallery-data.ts` | **Main data file** – Add, edit, or remove galleries here |
| `public/`             | Store thumbnail images here                              |
| `app/`                | Next.js app pages                                        |
| `components/`         | React UI components                                      |

---

## Need Help?

If you encounter issues or need to make more complex changes, refer to the [Next.js Documentation](https://nextjs.org/docs) or reach out to the development team.

---

_Last updated: January 2026_
