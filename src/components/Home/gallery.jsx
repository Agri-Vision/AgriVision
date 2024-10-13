import React from 'react';

const Gallery = () => {
  // Sample image URLs from Unsplash and other free-to-use placeholder sites
  const images = [
    'https://drive.google.com/file/d/1pfqdONOYS7B4wXSBZUWNTF3MNB-BH3fn/view?usp=sharing',
    'https://images.unsplash.com/photo-1488739365465-1d0c6b345993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDZ8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1534119139481-5c8e1e18c5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDV8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDJ8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1482434900272-35a4f45b7f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDF8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1536302947006-7a3d3dd929d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDd8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1474508750027-bae949dc9b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDExfGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1491557345352-5929e343eb89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDF8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1482434900272-35a4f45b7f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDF8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzgyOXwwfDF8c2VhcmNofDJ8fGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE2ODc2MTE3NjA&ixlib=rb-1.2.1&q=80&w=400',
  ];

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold text-center mb-8 text-[color:#324d67]">Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
