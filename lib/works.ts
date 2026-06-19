export type WorkLink = {
  label: string;
  url: string;
};

export type Work = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string | null;
  year: string;
  longDescription: string;
  links: WorkLink[];
};

export const works: Work[] = [
  {
    slug: "mobile-experience",
    title: "Mobile experience",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    thumbnail: "/works/work-1.png",
    year: "2024",
    longDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    links: [{ label: "Samsung", url: "https://www.samsung.com" }],
  },
  {
    slug: "foldable-experience",
    title: "Foldable experience",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical",
    thumbnail: "/works/work-2.png",
    year: "2023",
    longDescription:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and discovered the undoubtable source.",
    links: [{ label: "Samsung", url: "https://www.samsung.com" }],
  },
  {
    slug: "next-experience",
    title: "Next experience",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page",
    thumbnail: "/works/work-3.png",
    year: "2022",
    longDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    links: [{ label: "Samsung", url: "https://www.samsung.com" }],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((work) => work.slug === slug);
}
