// Central content source for the portfolio.
// Update this file to change personal info, skills, projects, or education
// without touching component code.

export const personal = {
  name: "Swagat Nepal",
  title: "AI/ML Engineer",
  roles: ["AI Engineer", "Machine Learning Engineer", "Data Scientist"],
  location: "Bhaktapur, Nepal",
  email: "ceswagat356@gmail.com",
  phone: "+977 984-924-3997",
  github: "https://github.com/swagat017",
  linkedin: "https://www.linkedin.com/in/swagat-nepal-3651343a7/",
  resumeUrl: "/resume.pdf",
  headline: "Building machine learning systems that turn data into decisions.",
  intro:
    "Final-year Computer Engineering student focused on applied AI/ML :- from convolutional networks to classical ML pipelines :- with a habit of shipping complete, end-to-end projects rather than notebooks that stop at a metric.",
};

export const about = {
  paragraphs: [
    "I'm a final-year Computer Engineering student at IOE, Thapathali Campus, with a focus that narrowed early and hasn't wavered: teaching machines to find structure in data. What draws me to AI isn't the hype :- it's the fact that there's always a deeper layer to understand, a better architecture to try, a sharper way to validate a result.",
    "Most of what I know came from building rather than watching. I've taken projects from raw, messy datasets through preprocessing, modeling, and evaluation :- comparing algorithms honestly instead of settling for the first one that works, and treating overfitting and data leakage as problems to actively guard against, not edge cases.",
    "Engineering has been the plan since childhood, for a simple reason: it's a discipline built around solving problems that matter. AI/ML is where I've chosen to point that instinct. Long-term, I want to be the engineer teams trust to take a model from idea to something reliable in production.",
    "Away from the keyboard, I'm usually watching or playing cricket with friends :- a good reset before the next dataset.",
  ],
};

export type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 4 },
      { name: "C / C++", level: 5 },
      { name: "SQL", level: 5 },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 5 },
      { name: "Feature Engineering", level: 4 },
      { name: "Model Evaluation", level: 4 },
    ],
  },
  {
    category: "Deep Learning",
    skills: [
      { name: "PyTorch", level: 4 },
      { name: "TensorFlow", level: 3 },
      { name: "CNNs & ANNs", level: 4 },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Pandas", level: 5 },
      { name: "NumPy", level: 5 },
      { name: "Data Visualization", level: 5 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 4 },
      { name: "Jupyter", level: 5 },
      { name: "Matplotlib / Seaborn", level: 5 },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  chart: "loss-curve" | "bar-compare" | "cluster-scatter" | "dual-metric";
  tech: string[];
  github: string;
  problem: string;
  challenges: string;
  learnings: string;
  metric: { label: string; value: string };
};

export const projects: Project[] = [
  {
    slug: "cnn-cifar10",
    title: "CNN for CIFAR-10",
    summary:
      "A convolutional network built from scratch in PyTorch, classifying 10 object categories with 74.87% test accuracy.",
    description:
      "A custom three-block CNN trained on CIFAR-10's 60,000 images, built to understand convolutional feature extraction from first principles rather than fine-tuning a pretrained backbone. Includes a second training run with tracked validation loss to diagnose overfitting.",
    chart: "loss-curve",
    tech: ["Python", "PyTorch", "Torchvision", "Matplotlib", "Pandas"],
    github: "https://github.com/swagat017/CNN-for-CIFAR10",
    problem:
      "Developed an image classification model capable of recognizing everyday objects across 10 classes, demonstrating practical computer vision techniques and deep learning fundamentals.",
    challenges:
      "Improving accuracy while avoiding overfitting, tuning hyperparameters, and balancing training performance against computational efficiency across three convolutional blocks.",
    learnings:
      "How progressively deepening feature maps while downsampling spatial dimensions affects representational capacity, and how tracking validation loss alongside training loss exposes overfitting early.",
    metric: { label: "Test Accuracy", value: "74.87%" },
  },
  {
    slug: "creditwise-loan-approval",
    title: "CreditWise Loan Approval System",
    summary:
      "A loan-approval prediction pipeline comparing Logistic Regression, kNN, and Naive Bayes, improved from 86.5% to 88% accuracy through feature engineering.",
    description:
      "An end-to-end classical ML pipeline for financial institutions: cleaning applicant-level demographic, employment, and credit data, engineering features like squared DTI ratio and credit score, and benchmarking three classifiers on precision, recall, and F1.",
    chart: "bar-compare",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Seaborn"],
    github: "https://github.com/swagat017/CreditWise-Loan-Approval-System",
    problem:
      "Built a machine learning pipeline to help financial institutions predict loan approval decisions more consistently and efficiently using applicant data.",
    challenges:
      "Handling missing values and categorical features, engineering informative new features, and comparing multiple algorithms fairly without letting any one model overfit the engineered set.",
    learnings:
      "That feature engineering — not just model choice — was the biggest lever on performance, and that precision/recall trade-offs matter more than raw accuracy in a lending context.",
    metric: { label: "Accuracy After Feature Engineering", value: "88%" },
  },
  {
    slug: "smartcart-clustering",
    title: "SmartCart Clustering",
    summary:
      "Unsupervised customer segmentation with K-Means and Agglomerative Clustering, identifying 4 distinct retail customer segments.",
    description:
      "Segmented retail customers by demographics and spending behavior using PCA for dimensionality reduction, then compared K-Means and Agglomerative Clustering — validating cluster count with both the elbow method and silhouette scores before characterizing each segment.",
    chart: "cluster-scatter",
    tech: ["Python", "Scikit-learn", "PCA", "Pandas", "Seaborn"],
    github: "https://github.com/swagat017/SmartCart-Clustering",
    problem:
      "Segmented retail customers into meaningful groups to help a business understand purchasing behavior and support targeted marketing.",
    challenges:
      "Selecting the optimal number of clusters objectively, reducing dimensionality with PCA while preserving meaningful variance, and interpreting what each resulting cluster actually represented.",
    learnings:
      "How to validate an unsupervised choice like cluster count with more than one method, and how PCA-space visualizations can make abstract clusters concretely interpretable.",
    metric: { label: "Customer Segments Identified", value: "4" },
  },
  {
    slug: "ann-regression-classification",
    title: "ANN for Regression and Classification",
    summary:
      "Feedforward neural networks applied to both a regression task (power plant output, R² 0.93) and a classification task (date fruit variety, 91.7% accuracy).",
    description:
      "Two feedforward ANNs built and evaluated end-to-end: one predicting power plant energy output and benchmarked against Linear Regression, Decision Tree, and Random Forest; another classifying 7 date fruit varieties from morphological features — covering preprocessing, scaling, architecture design, and Adam-optimized training.",
    chart: "dual-metric",
    tech: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/swagat017/ANN-for-Regression-and-Classification",
    problem:
      "Applied neural networks to solve both regression and classification tasks, demonstrating the flexibility of deep learning across different prediction problems.",
    challenges:
      "Designing suitable architectures and activation functions for two different problem types, preventing overfitting, tuning hyperparameters, and evaluating results fairly against traditional ML baselines.",
    learnings:
      "That a feedforward network is genuinely task-agnostic across regression and classification when the output layer and loss function are chosen correctly — and where it does and doesn't beat classical models.",
    metric: { label: "Regression R²", value: "0.93" },
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    institution: "IOE, Thapathali Campus",
    degree: "Bachelor's in Computer Engineering",
    duration: "Apr 2023 — Present",
    description:
      "Final-year Computer Engineering student focused on applied AI/ML, with coursework and self-directed projects spanning deep learning, classical machine learning, and data science.",
  },
  {
    institution: "NIST Banepa",
    degree: "+2 Science",
    duration: "Jun 2020 — Jun 2022",
    description:
      "Completed higher secondary education in the science stream, building the mathematical foundation later applied to machine learning.",
  },
];

export const certifications = [
  {
    name: "PRIME — AI/ML Course",
    issuer: "Apna College",
    year: "2026",
  },
];
