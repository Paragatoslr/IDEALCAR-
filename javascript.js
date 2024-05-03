    // Define your YouTube video links here
    const videoLinks = [
      "https://www.youtube.com/embed/diEV5NwCurQ?si=GvYyFSnCcoIfCMlK",
      "https://www.youtube.com/embed/diEV5NwCurQ?si=GvYyFSnCcoIfCMlK",
  
      // Add more video links as needed
  ];
  
  // Function to dynamically generate carousel items
  function generateCarouselItems() {
      const carouselInner = document.getElementById("carouselInner");
      carouselInner.innerHTML = ""; // Clear existing content
  
      videoLinks.forEach((link, index) => {
          const isActive = index === 0 ? "active" : ""; // Set the first item as active
          const carouselItem = `
              <div class="carousel-item ${isActive}">
                  <div class="container">
                      <div class="row justify-content-center">
                          <div class="col-md-8">
                              <div class="relative mt-4 mb-3">
                                  <div class="mt-4 mb-3">
                                      <div class="card rounded-xl overflow-auto p-8">
                                          <iframe class="py-3 aspect-auto" width="auto" height="550" src="${link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                          <div class="card-body p-2">
                                              <h1>Video Title</h1>
                                              <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda veritatis quo, at hic eveniet animi perspiciatis atque voluptates, in molestiae iusto architecto ex excepturi voluptatibus dignissimos necessitatibus fuga enim dolor?</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          carouselInner.innerHTML += carouselItem; // Append carousel item
      });
  }
  
  // Call the function to generate carousel items
  generateCarouselItems();
  