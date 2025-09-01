'use client'

import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/app/lib/animations'
import { education, experiences } from '@/app/lib/constants'

export default function Education() {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="py-20"
            id="education"
        >
            <motion.div variants={textVariant()}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Education</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 grid-cols-2 gap-8">
                {education.map((education, index) => (
                    <motion.div
                        key={education.col}
                        variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
                        className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center mb-6">
                            <education.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{education.col}</h3>
                        <h3 className="text-l mb-3">{education.course}</h3>
                        <h4 className="text-m mb-3">{education.time}</h4>
                        {Array.isArray(education.description) ? (
                            <ul className="text-gray-400 list-disc list-inside">
                                {education.description.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-400">{education.description}</p>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}