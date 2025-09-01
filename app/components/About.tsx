'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { skills } from '@/app/lib/constants'

export default function About() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="pb-20 pt-5"
            id="about"
        >
            <motion.div variants={textVariant()}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12">
                <motion.div
                    variants={fadeIn('right', 'spring', 0.1, 1)}
                    className="md:w-1/2"
                >
                    <p className="text-gray-400 mb-6">
                        I am a Graduate Student at Carnegie Mellon University, where I am building 
                        on the foundation of two impactful years at Goldman Sachs. There, I had the 
                        opportunity to design and develop scalable enterprise applications and secure 
                        productivity tools that served thousands of users across the firm. 
                        That experience not only sharpened my technical expertise in full-stack development, 
                        automation, and system security, but also gave me a deep appreciation for building 
                        solutions that make a real difference at scale.
                    </p>
                    <p className="text-gray-400 mb-6">
                        My journey has been driven by a strong grounding in data structures and algorithms, 
                        and over time, I’ve grown passionate about applying emerging technologies, AI/ML and 
                        cloud computing in particular, to address real-world challenges. Through academic 
                        research and projects, I’ve explored areas such as healthcare diagnostics and data 
                        science, where technology has the potential to create meaningful impact.
                    </p>
                    <p className="text-gray-400">
                        Alongside the technical work, I’ve enjoyed leading teams and contributing to 
                        both developer and social communities. For me, the most rewarding experiences 
                        come from not just solving complex problems, but also collaborating with others 
                        to bring ideas to life and create solutions that last.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 'spring', 0.1, 1)}
                    className="md:w-1/2"
                >
                    <h3 className="text-xl font-semibold mb-6">My Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="px-4 py-2 bg-gray-900 rounded-full flex items-center gap-2"
                            >
                                <skill.icon className="w-5 h-5 text-blue-400" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}