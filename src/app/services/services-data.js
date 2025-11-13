import {
  FaHome,
  FaBuilding,
  FaCube,
  FaHouseUser,
  FaPencilRuler,
  FaHammer,
  FaCog,
  FaClipboardList,
} from "react-icons/fa";

export const servicesData = {
  main: [
    {
      title: "Constructions",
      description:
        "Constructions shape our world, turning blueprints into buildings that define our landscapes and lives. From residential homes to commercial complexes, we deliver structural excellence with precision engineering and quality craftsmanship.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Interior Designs",
      description:
        "Interior design transforms spaces through creativity, functionality, and aesthetics. We craft environments that reflect your personality while maximizing space utility, comfort, and visual appeal through thoughtful design choices.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Furniture Designs",
      description:
        "Furniture design combines style, functionality, and comfort for diverse spaces. Our custom furniture solutions blend contemporary aesthetics with ergonomic excellence, creating pieces that are both beautiful and practical.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Office Interior Setup",
      description:
        "Office interior setup creates productive, stylish, and collaborative work environments. We design modern workspaces that boost employee morale, enhance productivity, and reflect your company's culture and values.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    },
  ],
  specialized: [
    {
      title: "Home Interior Design",
      description:
        "Complete interior design solutions for residential spaces, creating harmonious living environments that balance aesthetics with functionality.",
      icon: <FaHome />,
    },
    {
      title: "Home Exterior Design",
      description:
        "Architectural facade design and exterior beautification that enhances curb appeal and creates lasting first impressions.",
      icon: <FaHouseUser />,
    },
    {
      title: "2D/3D Design Layout",
      description:
        "Advanced visualization services with detailed 2D plans and photorealistic 3D renderings to help you visualize your project before execution.",
      icon: <FaCube />,
    },
    {
      title: "Modern Home Interior",
      description:
        "Contemporary interior design solutions featuring clean lines, minimalist aesthetics, and cutting-edge design trends for modern living.",
      icon: <FaBuilding />,
    },
    {
      title: "Custom Design Plan",
      description:
        "Personalized design planning services tailored to your specific needs, preferences, and budget constraints for truly unique spaces.",
      icon: <FaPencilRuler />,
    },
    {
      title: "General Contracting",
      description:
        "Comprehensive project management and construction services, coordinating all aspects of your build from start to finish.",
      icon: <FaHammer />,
    },
    {
      title: "Machine Design",
      description:
        "Specialized design and fabrication for industrial machinery and equipment, combining engineering precision with practical functionality.",
      icon: <FaCog />,
    },
    {
      title: "Project Planning",
      description:
        "Strategic project planning and scheduling services ensuring timely delivery, budget adherence, and quality control throughout execution.",
      icon: <FaClipboardList />,
    },
  ],
};
