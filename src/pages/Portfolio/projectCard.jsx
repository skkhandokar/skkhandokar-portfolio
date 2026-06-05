import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    const { title, description, technologies, image, link, id, githubLink } = project;
    
    return (
        <div className="card w-full max-w-[380px] bg-base-100/10 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group overflow-hidden rounded-2xl">
            {/* Image Section with Smooth Hover Zoom Effect */}
            <figure className="overflow-hidden relative h-52">
                <img 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" 
                    src={image} 
                    alt={title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </figure>
            
            {/* Content Section */}
            <div className="card-body p-6 flex flex-col justify-between">
                <div>
                    <h2 className="card-title text-[#00FFFF] text-xl font-bold mb-2 tracking-wide group-hover:text-white transition-colors duration-300">
                        {title}
                    </h2>
                    
                    {/* Description with clamped text to maintain uniform card height */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {description}
                    </p>
                </div>

                <div>
                    {/* Tech Badges Section */}
                    <div className="flex gap-2 justify-start flex-wrap mb-6">
                        {technologies?.map((tech, index) => (
                            <span 
                                key={index} 
                                className="badge badge-sm bg-cyan-500/10 text-[#00FFFF] border border-cyan-500/20 px-3 py-2 text-xs font-medium tracking-wide rounded-md shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="card-actions justify-between items-center gap-2 pt-2 border-t border-white/5">
                        {/* Live Link Button */}
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline text-[#00FFFF] border-[#00FFFF]/40 hover:bg-[#00FFFF] hover:text-neutral hover:border-[#00FFFF] transition-all duration-300 flex-1"
                        >
                            Live Link
                        </a>
                        
                        {/* GitHub / Project Details Button (Fixed Link) */}
                        <a 
                            href={githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-none shadow-lg shadow-cyan-500/20 flex-1"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;