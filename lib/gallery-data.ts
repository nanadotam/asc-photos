export interface Gallery {
  id: number
  title: string
  url: string
  thumbnail?: string
  description?: string
  photoCount?: number
}

export async function getGalleryLinks(): Promise<Gallery[]> {
  // In a real implementation, this would fetch from the JSON file
  // For example: const res = await fetch('/data/links.json')
  // const data = await res.json()

  // For demonstration, returning sample data with better image placeholders
  return [
    {
      id: 1,
      title: "Opening Night - ASC WEEK 2025",
      url: "https://ashesistudentcouncil.pixieset.com/openingnightascweek25/",
      thumbnail: "/ASC-WEEK-44.jpg",
      description: "Highlights from Opening Night",
      photoCount: 54,
    },
    {
      id: 2,
      title: "Black Saturday - ASC WEEK 2025",
      url: "https://ashesistudentcouncil.pixieset.com/weekendmarketasc25/",
      thumbnail: "/ASC-WEEK-452.jpg",
      description: "Highlights from Black Saturday",
      photoCount: 28,
    },
    {
      id: 3,
      title: "POP CULTR - ASC WEEK 2025",
      url: "https://ashesistudentcouncil-pr.pixieset.com/popcultrascweek25/",
      thumbnail: "/ASC-WEEK-66.jpg",
      description: "Highlights from Popular Culture Day",
      photoCount: 136,
    },
    {
      id: 4,
      title: "Office Party - November 2024",
      url: "https://example.com/gallery4",
      thumbnail: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=3270&auto=format&fit=crop",
      photoCount: 54,
    },
    {
      id: 5,
      title: "Marketing Campaign - October 2024",
      url: "https://example.com/gallery5",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3270&auto=format&fit=crop",
      description: "Social media assets and promotional materials",
      photoCount: 32,
    },
    {
      id: 6,
      title: "Company Offsite - September 2024",
      url: "https://example.com/gallery6",
      thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=3270&auto=format&fit=crop",
      description: "Team building and strategy sessions",
      photoCount: 47,
    },
  ]
}
