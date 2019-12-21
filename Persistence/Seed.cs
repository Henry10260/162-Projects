using System;
using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(!context.Posts.Any())
            {
                var Posts = new List<Post>
                {
                    new Post {
                    Title = "Jane Doe:",
                    Date = DateTime.Now.AddDays(-10),
                    Body = "This Website was extremly useful in learning more about dogs. Thanks for the help guys!"
                    },
                    new Post{
                    Title = "John Smith:",
                    Date = DateTime.Now.AddDays(-7),
                    Body = "I got my puppy from northshort doodles. This website was the only way I ever found them."
                    },
                    new Post{
                    Title = "James Jones:",
                    Date = DateTime.Now.AddDays(-4),
                    Body = "Henry's Dog Website has a lot of useful information but could use more links."    
                    },
                    new Post{
                    Title = "Jessica Jameson:",
                    Date = DateTime.Now.AddDays(-2),
                    Body = "I love this website! It has everything that I could ever want in a website about dogs. Great Work!"
                    }
                };

            context.Posts.AddRange(Posts);
            context.SaveChanges();
            }   
        }   
    }
}