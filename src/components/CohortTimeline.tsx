import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface TimelinePhase {
  title: string;
  duration: string;
  focus: string[];
}

interface CohortTimelineProps {
  cohortType?: 'foundation' | 'applied';
}

const CohortTimeline = ({ cohortType = 'foundation' }: CohortTimelineProps) => {
  const foundationPhases: TimelinePhase[] = [
    {
      title: 'Phase 1 — Orientation & Fundamentals',
      duration: 'Weeks 1–2',
      focus: [
        'AI basics and terminology',
        'Understanding how AI systems work',
        'Learning mindset & expectations'
      ]
    },
    {
      title: 'Phase 2 — Core Learning Modules',
      duration: 'Mid-program',
      focus: [
        'Tool exposure',
        'Applied concepts',
        'Guided walkthroughs'
      ]
    },
    {
      title: 'Phase 3 — Practical Application',
      duration: 'Later phase',
      focus: [
        'Case-based learning',
        'Workflow thinking',
        'Responsible AI usage'
      ]
    },
    {
      title: 'Phase 4 — Consolidation & Completion',
      duration: 'Final weeks',
      focus: [
        'Review & reflection',
        'Practical exercises',
        'Completion certificate'
      ]
    }
  ];

  const appliedPhases: TimelinePhase[] = [
    {
      title: 'Phase 1 — Orientation & Fundamentals',
      duration: 'Weeks 1–2',
      focus: [
        'AI basics and terminology',
        'Understanding how AI systems work',
        'Learning mindset & expectations'
      ]
    },
    {
      title: 'Phase 2 — Core Learning Modules',
      duration: 'Mid-program',
      focus: [
        'Tool exposure',
        'Applied concepts',
        'Guided walkthroughs'
      ]
    },
    {
      title: 'Phase 3 — Practical Application',
      duration: 'Later phase',
      focus: [
        'Case-based learning',
        'Workflow thinking',
        'Responsible AI usage'
      ]
    },
    {
      title: 'Phase 4 — Consolidation & Completion',
      duration: 'Final weeks',
      focus: [
        'Review & reflection',
        'Practical exercises',
        'Completion certificate'
      ]
    }
  ];

  const phases = cohortType === 'foundation' ? foundationPhases : appliedPhases;

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cohort Learning Timeline
          </h2>
        </motion.div>

        {/* Desktop: Vertical Timeline */}
        <div className="hidden md:block relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 top-0 w-0.5 bg-blue-200"
          ></motion.div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.2 + 0.2 }}
                  className="absolute left-6 top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow"
                ></motion.div>

                {/* Content Card */}
                <motion.div 
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {phase.duration}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Focus:</p>
                    {phase.focus.map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="md:hidden space-y-6">
          {phases.map((phase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.2 }}
                  className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm"
                >
                  {index + 1}
                </motion.div>
                <span className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                  {phase.duration}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-4">{phase.title}</h3>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700 mb-3">Focus:</p>
                {phase.focus.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <p className="text-gray-700 text-center">
            <span className="font-semibold">Note:</span> Timelines may vary slightly by cohort, but learning structure remains consistent.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CohortTimeline;
