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
      title: "ROOTS TO HORIZONS - ASC WEEK 2025",
      url: "https://ashesistudentcouncil.pixieset.com/rootstohorizons/",
      description: "Highlights from rootstohorizons",
      thumbnail: "/ASC-WEEK-616.jpg",
      photoCount: 154,
    },
    // {
      //   id: 6,
      //   title: "FAMILY FEUD - ASC WEEK 2025",
      //   url: "",
      //   thumbnail: "/ASC-WEEK-866.jpg",
      //   description: "Highlights from ASHCHELLA",
      //   photoCount: 332,
      // },
      {
        id: 5,
        title: "CRAZY DAY - ASC WEEK 2025",
        url: "https://ashesistudentcouncil.pixieset.com/crazyday/",
        thumbnail: "/ASC-WEEK-1056.jpg",
        description: "Highlights from ASHCHELLA",
        photoCount: 332,
      },
      {
        id: 6,
        title: "ASHCHELLA - ASC WEEK 2025",
        url: "https://ashesistudentcouncil-pr.pixieset.com/ashchella/",
        thumbnail: "/ASC-WEEK-866.jpg",
        description: "Highlights from ASHCHELLA",
        photoCount: 332,
      },
      {
        id: 7,
        title: "Vals Day 2025",
        url: "https://drive.google.com/drive/folders/1NSHyqZavzEdsmJPQICdFO5V_c1MLMpVn?usp=sharing",
        thumbnail: "/ASH05539.jpg",
        description: "Highlights from Vals Day 2025",
        photoCount: 332,
      },
      {
        id: 8,
        title: "Ustun Awards 2025",
        url: "https://drive.google.com/drive/folders/1W7PIQ1ZWnGFHUHoqXY3BzrJh9yq78_9V?usp=sharing",
        thumbnail: "/ASH08332.jpeg",
        description: "Highlights from Ustun Awards 2025",
        photoCount: 332,
      },
      {
        id: 9,
        title: "Ubora Awards 2025 (PT1)",
        url: "https://cyrusthekingsgallery4.pixieset.com/ubora2025/",
        thumbnail: "/UB1.jpeg",
        description: "Highlights from Ubora Awards 2025",
        photoCount: 332,
      },
      {
        id: 10,
        title: "Ubora Awards 2025 (PT2)",
        url: "https://theblvckcreator81.pixieset.com/ubora2025/",
        thumbnail: "/UB2.jpeg",
        description: "Highlights from Ubora Awards 2025",
        photoCount: 332,
      },
    {
        id: 10,
        title: "Y2K Neon Party",
        url: "https://drive.google.com/drive/folders/1kXqHpjsjVDz8ta5B2ezzAjI1YuuSx2g6",
        thumbnail: "/Y2K Neon DSC08045 Medium.jpeg",
        description: "Highlights Akwaaba Night Part 2, 2025",
        photoCount: 332,
      },
      
    ]
}
