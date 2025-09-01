'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { experiences } from '@/app/lib/constants'

export default function Experiences() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-20"
            id="experience"
        >
            <motion.div variants={textVariant()}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
                {experiences.map((experience, index) => (
                    <motion.div
                        key={experience.title}
                        variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                        className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mb-6">
                            <Image src={experience.image} alt={experience.organisation} width={6} height={6} className="w-6 h-6" />   
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{experience.organisation}</h3>
                        <h3 className="text-l mb-3">{experience.title}</h3>
                        <h4 className="text-m mb-3">{experience.time}</h4>
                        {Array.isArray(experience.description) ? (
                            <ul className="text-gray-400 list-disc list-inside">
                                {experience.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400">{experience.description}</p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}