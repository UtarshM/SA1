import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Star, Award, BookOpen, CheckCircle, Play, User, Code, Zap } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PaymentModal from '../components/PaymentModal';
import toast from 'react-hot-toast';

const CourseSingle = () => {
  const { courseId } = useParams();
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    courseTitle: '',
    coursePrice: 0
  });

  // Course data based on ID
  const courseData: any = {
    '1': {
      id: 1,
      title: 'Complete AI & Machine Learning Mastery',
      subtitle: 'Master AI from Fundamentals to Advanced Implementation with Full Algorithm Coverage',
      category: 'Artificial Intelligence',
      description: 'This comprehensive 20-week program takes you from AI fundamentals to advanced implementation. You will learn and implement ML algorithms from scratch, understand the mathematics behind AI, build neural networks, and deploy production-ready AI systems. Every algorithm is taught with theory, mathematics, and hands-on implementation.',
      price: 15000,
      originalPrice: 25000,
      duration: '16 weeks + 4 weeks Capstone',
      students: '50+',
      rating: 4.9,
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Dr. Harsh Singh',
      instructorBio: 'PhD in AI, 10+ years industry experience, Former AI Lead at Tech Giants',
      modules: 24,
      projects: 8,
      certificate: true,
      icon: <Code className="h-6 w-6" />
    },
    '2': {
      id: 2,
      title: 'AI-Powered Automation & Intelligent Systems',
      subtitle: 'Build Intelligent Automation Systems from Scratch',
      category: 'AI Automation',
      description: 'Learn to build intelligent automation systems that combine AI with process automation. Master RPA, AI agents, workflow automation, and intelligent decision systems. Build end-to-end automated solutions that solve real business problems.',
      price: 12000,
      originalPrice: 20000,
      duration: '12 weeks + 3 weeks Capstone',
      students: '45+',
      rating: 4.8,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      instructor: 'Michael Chen',
      instructorBio: 'Automation Architect, 8+ years in RPA and AI Integration',
      modules: 18,
      projects: 6,
      certificate: true,
      icon: <Zap className="h-6 w-6" />
    }
  };

  const course = courseData[courseId || '1'];

  // Program 1: AI & ML Mastery - Full Curriculum
  const aiMLCurriculum = [
    {
      week: '1-2',
      title: 'AI Foundations & Python for AI',
      topics: [
        'What is AI? History, Types, and Applications',
        'Python fundamentals for AI: NumPy, Pandas, Matplotlib',
        'Mathematics for AI: Linear Algebra basics',
        'Vectors, Matrices, and Operations',
        'Setting up AI development environment'
      ],
      algorithms: [],
      project: 'Data Analysis with Python'
    },
    {
      week: '3-4',
      title: 'Linear Regression - Theory to Implementation',
      topics: [
        'Supervised Learning fundamentals',
        'Linear Regression: Mathematical foundation',
        'Cost Function (MSE) and Gradient Descent',
        'Algorithm: Implement Linear Regression from scratch',
        'Feature scaling and normalization'
      ],
      algorithms: ['Linear Regression', 'Gradient Descent'],
      project: 'House Price Prediction System'
    },
    {
      week: '5-6',
      title: 'Classification Algorithms',
      topics: [
        'Logistic Regression: Theory and Math',
        'Algorithm: Implement Logistic Regression from scratch',
        'Decision Trees: Information Gain, Entropy, Gini Index',
        'Algorithm: Build Decision Tree classifier',
        'Model evaluation: Confusion Matrix, Precision, Recall, F1'
      ],
      algorithms: ['Logistic Regression', 'Decision Trees', 'ID3 Algorithm'],
      project: 'Customer Churn Prediction'
    },
    {
      week: '7-8',
      title: 'Advanced Classification & Ensemble Methods',
      topics: [
        'K-Nearest Neighbors (KNN): Distance metrics',
        'Algorithm: Implement KNN from scratch',
        'Support Vector Machines (SVM): Kernel trick',
        'Random Forest: Bagging and feature importance',
        'Algorithm: Build Random Forest classifier'
      ],
      algorithms: ['KNN', 'SVM', 'Random Forest'],
      project: 'Medical Diagnosis System'
    },
    {
      week: '9-10',
      title: 'Unsupervised Learning & Clustering',
      topics: [
        'K-Means Clustering: Algorithm and implementation',
        'Hierarchical Clustering: Dendrograms',
        'DBSCAN: Density-based clustering',
        'Dimensionality Reduction: PCA algorithm',
        'Algorithm: Implement K-Means and PCA from scratch'
      ],
      algorithms: ['K-Means', 'Hierarchical Clustering', 'DBSCAN', 'PCA'],
      project: 'Customer Segmentation System'
    },
    {
      week: '11-12',
      title: 'Neural Networks Fundamentals',
      topics: [
        'Perceptron: The building block',
        'Algorithm: Implement Perceptron from scratch',
        'Multi-layer Perceptron (MLP)',
        'Backpropagation algorithm: Step-by-step',
        'Activation functions: Sigmoid, ReLU, Tanh'
      ],
      algorithms: ['Perceptron', 'Backpropagation', 'MLP'],
      project: 'Handwritten Digit Recognition'
    },
    {
      week: '13-14',
      title: 'Deep Learning & CNNs',
      topics: [
        'Convolutional Neural Networks: Architecture',
        'Convolution operation and pooling',
        'Algorithm: Build CNN from scratch',
        'Transfer Learning: Using pre-trained models',
        'Image classification and object detection'
      ],
      algorithms: ['CNN', 'Max Pooling', 'Batch Normalization'],
      project: 'Image Classification System'
    },
    {
      week: '15-16',
      title: 'Recurrent Networks & NLP',
      topics: [
        'Recurrent Neural Networks (RNN)',
        'LSTM and GRU: Handling long sequences',
        'Algorithm: Implement LSTM from scratch',
        'Word embeddings: Word2Vec, GloVe',
        'Transformers and Attention mechanism'
      ],
      algorithms: ['RNN', 'LSTM', 'GRU', 'Attention Mechanism'],
      project: 'Sentiment Analysis & Text Generation'
    },
    {
      week: '17-18',
      title: 'Advanced AI Techniques',
      topics: [
        'Reinforcement Learning: Q-Learning',
        'Algorithm: Implement Q-Learning',
        'Generative Adversarial Networks (GANs)',
        'AutoEncoders and Variational AutoEncoders',
        'Model optimization and hyperparameter tuning'
      ],
      algorithms: ['Q-Learning', 'GANs', 'VAE'],
      project: 'AI Game Agent'
    },
    {
      week: '19-20',
      title: 'Production AI & Deployment',
      topics: [
        'Model deployment: Flask, FastAPI',
        'MLOps: Model versioning and monitoring',
        'Cloud deployment: AWS, Azure, GCP',
        'API development for AI models',
        'Performance optimization and scaling'
      ],
      algorithms: [],
      project: 'Deploy AI Model as Production API'
    },
    {
      week: '21-24',
      title: 'Capstone Project',
      topics: [
        'End-to-end AI system development',
        'Problem definition and data collection',
        'Model selection and implementation',
        'Deployment and monitoring',
        'Project presentation and documentation'
      ],
      algorithms: [],
      project: 'Complete AI Solution (Your Choice)'
    }
  ];

  // Program 2: AI Automation - Full Curriculum
  const automationCurriculum = [
    {
      week: '1-2',
      title: 'Automation Fundamentals & Python',
      topics: [
        'Introduction to Automation and RPA',
        'Python for automation: Selenium, PyAutoGUI',
        'Web scraping and data extraction',
        'File and system automation',
        'API integration basics'
      ],
      algorithms: [],
      project: 'Automated Data Collection System'
    },
    {
      week: '3-4',
      title: 'RPA & Process Automation',
      topics: [
        'Robotic Process Automation concepts',
        'UiPath/Automation Anywhere fundamentals',
        'Process mining and analysis',
        'Workflow design and optimization',
        'Exception handling in automation'
      ],
      algorithms: [],
      project: 'Invoice Processing Automation'
    },
    {
      week: '5-6',
      title: 'AI-Powered Decision Systems',
      topics: [
        'Rule-based systems and decision trees',
        'Integrating ML models with automation',
        'Intelligent document processing',
        'OCR and text extraction with AI',
        'Classification and routing automation'
      ],
      algorithms: ['Decision Trees for Automation', 'Rule Engine'],
      project: 'Intelligent Document Classifier'
    },
    {
      week: '7-8',
      title: 'AI Agents & Chatbots',
      topics: [
        'Conversational AI fundamentals',
        'NLP for chatbots',
        'Intent recognition and entity extraction',
        'Dialogue management',
        'Building chatbots with Rasa/Dialogflow'
      ],
      algorithms: ['Intent Classification', 'Named Entity Recognition'],
      project: 'Customer Service Chatbot'
    },
    {
      week: '9-10',
      title: 'Workflow Automation & Orchestration',
      topics: [
        'Workflow engines: Apache Airflow',
        'Task scheduling and dependencies',
        'Data pipeline automation',
        'ETL process automation',
        'Monitoring and alerting'
      ],
      algorithms: [],
      project: 'Automated Data Pipeline'
    },
    {
      week: '11-12',
      title: 'Computer Vision for Automation',
      topics: [
        'Image processing for automation',
        'Object detection in workflows',
        'Visual testing automation',
        'Screen automation with CV',
        'Quality control automation'
      ],
      algorithms: ['Object Detection', 'Image Classification'],
      project: 'Visual Quality Inspection System'
    },
    {
      week: '13-15',
      title: 'Integration & Deployment',
      topics: [
        'API development for automation',
        'Microservices architecture',
        'Cloud automation: AWS Lambda, Azure Functions',
        'CI/CD for automation systems',
        'Monitoring and maintenance'
      ],
      algorithms: [],
      project: 'Cloud-Based Automation Platform'
    },
    {
      week: '16-18',
      title: 'Capstone Project',
      topics: [
        'End-to-end automation solution',
        'Business process analysis',
        'System design and implementation',
        'Testing and deployment',
        'Documentation and handover'
      ],
      algorithms: [],
      project: 'Complete Automation Solution'
    }
  ];

  const curriculum = courseId === '1' ? aiMLCurriculum : automationCurriculum;

  const whoThisIsFor = courseId === '1' ? [
    'Beginners wanting to master AI from fundamentals to advanced',
    'Developers looking to transition into AI/ML roles',
    'Students seeking comprehensive AI education with algorithm implementation',
    'Professionals wanting to build production-ready AI systems',
    'Anyone serious about understanding AI mathematics and theory'
  ] : [
    'IT professionals wanting to specialize in automation',
    'Developers looking to build intelligent automation systems',
    'Business analysts wanting to implement AI-powered workflows',
    'RPA developers wanting to add AI capabilities',
    'Anyone wanting to automate processes with AI'
  ];

  const learningOutcomes = courseId === '1' ? [
    'Implement ML algorithms from scratch (Linear Regression, Logistic Regression, Decision Trees, KNN, SVM)',
    'Build and train neural networks, CNNs, RNNs, and LSTMs',
    'Understand the mathematics behind AI (Linear Algebra, Calculus, Statistics)',
    'Deploy production-ready AI models with APIs',
    'Work with TensorFlow, PyTorch, and scikit-learn',
    'Handle real-world datasets and build complete AI pipelines',
    'Implement advanced techniques: GANs, Reinforcement Learning, Transformers',
    'Optimize and scale AI systems for production'
  ] : [
    'Build RPA solutions for business process automation',
    'Create AI-powered chatbots and intelligent agents',
    'Implement computer vision for automation tasks',
    'Design and deploy workflow automation systems',
    'Integrate AI models with automation platforms',
    'Build end-to-end automated solutions',
    'Deploy automation systems on cloud platforms',
    'Monitor and maintain intelligent automation systems'
  ];

  const careerPathways = courseId === '1' ? [
    {
      role: 'AI/ML Engineer',
      description: 'Build and deploy AI systems, implement algorithms, optimize models'
    },
    {
      role: 'Data Scientist',
      description: 'Analyze data, build predictive models, extract insights'
    },
    {
      role: 'AI Research Engineer',
      description: 'Research and develop new AI techniques and algorithms'
    },
    {
      role: 'Deep Learning Engineer',
      description: 'Specialize in neural networks and deep learning systems'
    }
  ] : [
    {
      role: 'Automation Engineer',
      description: 'Design and implement intelligent automation solutions'
    },
    {
      role: 'RPA Developer',
      description: 'Build robotic process automation systems with AI'
    },
    {
      role: 'AI Solutions Architect',
      description: 'Design end-to-end AI-powered automation architectures'
    },
    {
      role: 'Intelligent Systems Engineer',
      description: 'Build systems that combine AI with automation'
    }
  ];

  const requirements = [
    'Basic Python programming knowledge',
    'Understanding of basic mathematics (high school level)',
    'Access to laptop/computer with internet',
    'Willingness to learn and practice regularly'
  ];

  const courseFeatures = [
    'Live instructor-led sessions',
    'Hands-on algorithm implementation',
    'Weekly assignments and assessments',
    'Real-world project-based learning',
    'Code reviews and feedback',
    'Capstone project with mentorship',
    'Verified certificate with unique ID',
    'Lifetime access to course materials',
    'Career guidance and support'
  ];

  const handleEnrollClick = () => {
    setPaymentModal({
      isOpen: true,
      courseTitle: course.title,
      coursePrice: course.price
    });
  };

  const handlePaymentSuccess = () => {
    toast.success('Successfully enrolled! Check your email for course access.');
  };

  return (
    <div className="pt-16">
      <SEOHead
        title={course.title}
        description={course.description}
        keywords="AI program, machine learning, automation, algorithms, deep learning"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  {course.icon}
                </div>
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {course.subtitle}
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.students} enrolled</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                  <span className="text-xl text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                </div>
                <button
                  onClick={handleEnrollClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <button className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all duration-200">
                  <Play className="h-8 w-8 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {course.description}
              </p>

              {/* Who This Program Is For */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who This Program Is For</h3>
              <div className="space-y-3 mb-12">
                {whoThisIsFor.map((item: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* What You'll Be Able To Do */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Be Able To Do After Completion</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {learningOutcomes.map((outcome: string, index: number) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Prerequisites</h3>
              <div className="space-y-3 mb-12">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              {/* Program Structure */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Career Pathways */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Pathways</h3>
              <p className="text-gray-600 mb-6">
                This program prepares you for various roles in the {courseId === '1' ? 'AI and ML' : 'Automation and AI'} industry. While we don't guarantee placement, 
                our structured curriculum builds the capabilities employers seek.
              </p>
              <div className="space-y-4">
                {careerPathways.map((pathway: any, index: number) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-2">{pathway.role}</h4>
                    <p className="text-gray-600">{pathway.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹{course.price.toLocaleString()}</span>
                    <span className="text-xl text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-green-600 font-medium">Save ₹{(course.originalPrice - course.price).toLocaleString()}</p>
                </div>

                <button
                  onClick={handleEnrollClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 mb-6"
                >
                  Enroll Now
                </button>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Modules</span>
                    <span className="font-medium">{course.modules}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-medium">{course.projects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-medium text-green-600">Verified</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center mb-2">
                    <User className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-medium">Instructor</span>
                  </div>
                  <p className="text-gray-700 font-semibold">{course.instructor}</p>
                  <p className="text-sm text-gray-500 mt-1">{course.instructorBio}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-3">Program Includes:</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Weekly learning outcomes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Algorithm implementations</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Module assessments</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Capstone project</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Verified certificate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Detailed Curriculum with Full Algorithm Coverage
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            {courseId === '1' 
              ? 'Every algorithm is taught with theory, mathematics, and hands-on implementation from scratch'
              : 'Build intelligent automation systems with AI integration and real-world projects'
            }
          </p>
          <div className="space-y-6">
            {curriculum.map((module: any, index: number) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {module.week}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                      {module.algorithms && module.algorithms.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {module.algorithms.map((algo: string, i: number) => (
                            <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                              🔬 {algo}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {module.topics.map((topic: string, topicIndex: number) => (
                      <div key={topicIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                  {module.project && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-semibold text-green-900">Project: </span>
                        <span className="text-green-800 ml-2">{module.project}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master {courseId === '1' ? 'AI & Machine Learning' : 'AI-Powered Automation'}?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our comprehensive program with algorithm implementation, real projects, and verified certification
          </p>
          <button
            onClick={handleEnrollClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Enroll Now - ₹{course.price.toLocaleString()}
          </button>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
        courseTitle={paymentModal.courseTitle}
        coursePrice={paymentModal.coursePrice}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default CourseSingle;
