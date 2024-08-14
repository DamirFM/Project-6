export const getPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-cache",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }
      return res.json();
    } catch (error) {
      console.error('Error loading Posts:', error);
    }
  }
