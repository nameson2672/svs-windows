import type { WindowDetails } from './type';

export const getWindowBySlug = (slug: string) => {
  return windows.find((x) => x.slug === slug);
};

const windows: WindowDetails[] = [
  {
    name: 'Casement Window',
    slug: 'casement',
    subHeading:
      'A casement window is hinged at the side and opens outward like a door, operated by a crank handle.',
    description:
      'A casement window is hinged at the side and opens outward like a door, operated by a crank handle. These windows are designed to provide maximum ventilation and are ideal for spaces where airflow is a priority. The crank mechanism makes them easy to operate, even in hard-to-reach areas. Casement windows are known for their tight seal, which helps in enhancing energy efficiency by preventing drafts. They are suitable for various home styles, offering a clean and unobstructed view when open or closed. Their versatile design and functionality make them a popular choice for modern and traditional homes alike.',
    benefits: [
      'Provides excellent ventilation as the entire window area can be opened.',
      'Offers a tight seal for better energy efficiency.',
      'Easy to operate with a simple crank mechanism.',
    ],
    operation:
      'To open, turn the crank handle until the window is fully open. To close, turn the handle in the opposite direction until the window is shut and securely latched.',
    coverImage: 'path/to/casement-cover.jpg',
    windowImage: '/windows/casement.gif',
    showcaseImage: '/show/casement.jpeg',
  },
  {
    name: 'Double Slider Window',
    slug: 'double-slider',
    subHeading:
      'A double slider window features two sashes that slide horizontally within the frame, allowing for ventilation from either side.',
    description:
      'A double slider window features two sashes that slide horizontally within the frame, allowing for ventilation from either side. This type of window is particularly suited for wide window openings and is commonly used in modern homes. Double slider windows offer a sleek and space-saving design that can enhance the aesthetics of any room. They are easy to operate, providing flexibility in controlling airflow and natural light. With both sashes being operable, cleaning and maintenance are simplified. Double slider windows combine functionality with contemporary design, making them a practical and stylish choice for homeowners.',
    benefits: [
      'Maximizes ventilation options as both sashes can be opened.',
      'Easy to operate with a simple sliding mechanism.',
      'Modern and space-saving design.',
    ],
    operation:
      'To open, unlock the latch and slide either sash horizontally. To close, slide the sash back and lock the latch.',
    coverImage: 'path/to/double-slider-cover.jpg',
    windowImage: '/windows/double-slider.gif',
    showcaseImage: '/slider_image-800x677.png',
  },
  {
    name: 'Double Hung Window',
    slug: 'double-hung',
    subHeading:
      'A double hung window features two vertically sliding sashes that move up and down independently.',
    description:
      'A double hung window features two vertically sliding sashes that move up and down independently. This traditional window design is a staple in many homes due to its classic appearance and practicality. Double hung windows are versatile and allow for flexible ventilation options, as either sash can be adjusted to let in fresh air. They are especially beneficial in rooms where space is limited since the sashes do not protrude when opened. Modern double hung windows often come with tilt-in sashes for easy cleaning. Their timeless look and functional design make them a popular choice for homeowners.',
    benefits: [
      'Allows for flexible ventilation options as both sashes can be adjusted.',
      'Traditional and timeless design suitable for many home styles.',
      'Easy to clean, especially models with tilt-in sashes.',
    ],
    operation:
      'To open, unlock the window and slide either the top or bottom sash upward or downward. To close, slide the sash back to its original position and lock.',
    coverImage: 'path/to/double-hung-cover.jpg',
    windowImage: '/windows/double-hung.gif',
    showcaseImage: '/show/double-hung.jpg',
  },
  {
    name: 'Single Slider Window',
    slug: 'single-slider',
    subHeading:
      'A single slider window features one stationary sash and one movable sash that slides horizontally.',
    description:
      'A single slider window features one stationary sash and one movable sash that slides horizontally. This design is simple yet effective, making it a popular choice for rooms where space is at a premium. Single slider windows are easy to operate and provide a modern aesthetic that complements various home styles. The sliding mechanism allows for quick and convenient ventilation. These windows are also known for their durability and low maintenance. Their sleek and unobtrusive design makes single slider windows a versatile option for enhancing both the functionality and appearance of a home.',
    benefits: [
      'Simple and easy to operate.',
      'Space-saving design ideal for small rooms.',
      'Provides a modern look.',
    ],
    operation:
      'To open, unlock the latch and slide the movable sash horizontally. To close, slide the sash back and lock the latch.',
    coverImage: 'path/to/single-slider-cover.jpg',
    windowImage: '/windows/single-slider.gif',
    showcaseImage: '/show/single-slider.jpg',
  },
  {
    name: 'Single Hung Window',
    slug: 'single-hung',
    subHeading:
      'A single hung window features a fixed upper sash and a movable lower sash that slides vertically.',
    description:
      'A single hung window features a fixed upper sash and a movable lower sash that slides vertically. This classic window design is widely appreciated for its simplicity and ease of use. Single hung windows are commonly found in traditional and contemporary homes alike. They provide effective ventilation through the operable lower sash, while the fixed upper sash offers a secure and stable structure. These windows are known for their energy efficiency and low maintenance requirements. Their straightforward design and functionality make single hung windows a reliable and practical choice for any home.',
    benefits: [
      'Traditional design suitable for various architectural styles.',
      'Easy to operate and maintain.',
      'Provides good ventilation with the movable lower sash.',
    ],
    operation:
      'To open, unlock the window and slide the lower sash upward. To close, slide the sash back down and lock.',
    coverImage: 'path/to/single-hung-cover.jpg',
    windowImage: '/windows/single-hung.gif',
    showcaseImage: '/show/single-hung.png',
  },
  {
    name: 'End Vent Slider Window',
    slug: 'end-vent-slider',
    subHeading:
      'An end vent slider window consists of a fixed center pane with sliding sashes on either end for ventilation.',
    description:
      'An end vent slider window consists of a fixed center pane with sliding sashes on either end for ventilation. This design combines the advantages of a picture window with the added benefit of ventilation. End vent slider windows are ideal for wide openings and provide a panoramic view of the outdoors. They offer a sleek and contemporary look, making them suitable for modern homes. The sliding sashes are easy to operate, allowing for flexible airflow control. These windows are perfect for large living areas where both aesthetic appeal and functionality are desired.',
    benefits: [
      'Combines a large fixed window with ventilation options.',
      'Ideal for wide openings.',
      'Modern design with easy operation.',
    ],
    operation:
      'To open, unlock the latch and slide either end sash horizontally. To close, slide the sash back and lock the latch.',
    coverImage: 'path/to/end-vent-slider-cover.jpg',
    windowImage: '/windows/end-vent.gif',
    showcaseImage: '/show/end-vent.jpeg',
  },
  {
    name: 'Picture Window',
    slug: 'picture',
    subHeading:
      'A picture window is a large, fixed window that provides an unobstructed view of the outdoors.',
    description:
      'A picture window is a large, fixed window that provides an unobstructed view of the outdoors. These windows are designed to maximize natural light and offer expansive views, making them a striking feature in any room. Picture windows do not open, which enhances their energy efficiency and reduces maintenance. They are often used in living rooms, dining areas, and other spaces where a scenic view is desired. The simplicity and elegance of picture windows make them a popular choice for modern and traditional homes alike. They can also be combined with other window styles for a customized look.',
    benefits: [
      'Maximizes natural light and outdoor views.',
      'Energy efficient as it is sealed and does not open.',
      'Low maintenance with no moving parts.',
    ],
    operation:
      'This window does not open and requires no operation. Simply clean the glass periodically to maintain clarity.',
    coverImage: 'path/to/picture-cover.jpg',
    windowImage: '/windows/picture.webp',
    showcaseImage: '/show/picture.jpg',
  },
  {
    name: 'Awning Window',
    slug: 'awning',
    subHeading:
      'An awning window is hinged at the top and opens outward, allowing for ventilation even during light rain.',
    description:
      'An awning window is hinged at the top and opens outward, allowing for ventilation even during light rain. These windows are ideal for areas where you want to maintain airflow while keeping out the elements. Awning windows are often used in bathrooms, kitchens, and other spaces where moisture is a concern. They provide excellent energy efficiency with a tight seal when closed. The design of awning windows makes them suitable for installation higher up on walls, ensuring privacy while allowing light and air to enter. Their practical and versatile design enhances both the functionality and appearance of a home.',
    benefits: [
      'Provides ventilation while keeping out rain.',
      'Good for hard-to-reach areas like above sinks or countertops.',
      'Energy-efficient design with a tight seal.',
    ],
    operation:
      'To open, unlock the window and push the bottom outwards, or use the crank handle if equipped. To close, pull the bottom inward or turn the handle until the window is shut and locked.',
    coverImage: 'path/to/awning-cover.jpg',
    windowImage: '/windows/awning.gif',
    showcaseImage: '/show/awning.jpeg',
  },
];
