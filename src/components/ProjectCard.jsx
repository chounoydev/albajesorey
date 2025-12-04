export default function ProjectCard({ title, description, link, openInNewTab, image }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />

      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2 mb-4">{description}</p>

      <a
        href={link}
        target={openInNewTab ? "_blank" : "_self"}
        className="inline-block px-4 py-2 rounded-full bg-[#073B4C] text-white hover:bg-[#055063] transition font-bold"
      >
        View Project
      </a>
    </div>
  );
}
