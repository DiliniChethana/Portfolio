# How to Add Demo Videos to Your Projects

Your portfolio now supports demo videos! Here's how to add them:

## Step 1: Upload Your Videos to YouTube

1. Go to [YouTube Studio](https://studio.youtube.com/)
2. Click "Create" → "Upload videos"
3. Upload your project demo videos
4. Set visibility (Public, Unlisted, or Private)
5. Copy the video URL

## Step 2: Add Video URLs to Your Projects

Open `src/components/Projects.tsx` and find your project. Add the `videoUrl` field:

### Example:
```typescript
{
  title: "SecuVision - Advanced Security Monitoring System",
  // ... other fields ...
  githubUrl: 'https://github.com/Amhar-code/SecuVision',
  liveUrl: '#',
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',  // Add this line
  // ... rest of project ...
}
```

## Step 3: Supported URL Formats

The video modal supports various YouTube URL formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

## Step 4: What Happens

- If a project has a `videoUrl`, a "Watch Demo" button will appear
- Clicking the button opens a modal with the embedded video
- The modal is responsive and works on all devices
- Users can close it by clicking the X button or clicking outside

## Alternative: Local Videos

If you want to use local video files instead of YouTube:

1. Place your video in `public/videos/` folder
2. Use the path in videoUrl: `videoUrl: '/videos/my-demo.mp4'`

**Note:** Local videos increase repository size and may affect loading speed.

## Where to Find videoUrl in Each Project

Search for these project titles in `src/components/Projects.tsx`:
- SecuVision (line ~29)
- Farm Management System SUSL (line ~51)
- Library Management System (line ~99)
- Tax Assessment System Sri Lanka (line ~110)
- Car Rental System (line ~164)
- Fridge AI (line ~207)
- Ceylon Spice Website (line ~245)
- Pet Shop Website (line ~300)
- AI Music Recommendation System (line ~353)
- Currency Converter (line ~412)

Add `videoUrl: 'YOUR_YOUTUBE_URL',` after the `liveUrl` field for each project.

## Example with Multiple Projects

```typescript
const projects = [
  {
    title: "Project 1",
    videoUrl: 'https://www.youtube.com/watch?v=ABC123',
    // ... other fields
  },
  {
    title: "Project 2",
    videoUrl: 'https://www.youtube.com/watch?v=XYZ789',
    // ... other fields
  },
  {
    title: "Project 3",
    // No videoUrl - button won't appear
    // ... other fields
  },
];
```

## Testing

After adding video URLs:
1. Save the file
2. The dev server will hot-reload
3. Click "Watch Demo" on any project card
4. Verify the video plays correctly

---

Need help? Check that:
- ✅ YouTube URL is correct
- ✅ Video is not set to Private
- ✅ `videoUrl` is inside the project object
- ✅ String is properly quoted
