// Project Data
const projects = [
    {
        id: 1,
        title: "High-Performance E-Commerce Backend Engine",
        description: "Production-ready backend system built with FastAPI, designed for high concurrency and transactional integrity. The platform includes secure JWT-based authentication, inventory management with stock safety controls, Redis-backed caching, rate limiting, and integrated Stripe payments. Containerized for deployment with Docker and optimized for scalability.",
        image: "images/projects/redis.jpg",
        github: "https://github.com/Jose-Mwangi/backend_project.git",
        tags: ["FastAPI", "PostgreSQL", "Redis", "Stripe", "Docker"]
    },
    {
        id: 2,
        title: "Distributed Web Scraper & News Aggregator",
        description: "Scalable distributed data collection system that crawls multiple news sources using Scrapy with Celery-powered task orchestration. Implements intelligent deduplication through hashing, persistent storage in MongoDB, and a FastAPI-powered search interface for real-time access to aggregated content.",
        image: "images/projects/news_radar.png",
        github: "https://github.com/Jose-Mwangi/news_radar_project.git",
        tags: ["Scrapy", "Celery", "MongoDB", "FastAPI", "Docker"]
    },
    {
        id: 3,
        title: "E-Commerce Product Management System",
        description: "Backend platform for online retail operations supporting product catalogs, shopping carts, checkout workflows, order tracking, administrative dashboards, and automated email notifications. Integrated multiple payment providers and implemented sales analytics for operational insights.",
        image: "images/projects/laravel.png",
        github: "https://github.com/Jose-Mwangi/ecommerce-system.git",
        tags: ["Laravel", "PHP", "MySQL", "Stripe", "PayPal"]
    },
    {
        id: 4,
        title: "Automated Financial Reporting Workbook",
        description: "Advanced Excel-based financial reporting system generating Balance Sheet, Income Statement, and Cash Flow Statement with automated job costing. Includes budget-versus-actual comparisons, drill-down transaction analysis, Power Query integrations, and well-documented VBA logic for extensibility.",
        image: "images/projects/vba.png",
        github: "https://github.com/Jose-Mwangi/financial-reporting",
        tags: ["Excel VBA", "Financial Modeling", "Power Query", "Accounting"]
    },
    {
        id: 5,
        title: "Sales Performance BI Dashboard",
        description: "Interactive multi-page analytics application built with Streamlit and deployed on Snowflake. Transforms retail transactional data into executive summaries and deep-dive analyses covering regional performance, product profitability, and customer behavior.",
        image: "images/projects/salesboard_streamlit.png",
        github: "https://github.com/Jose-Mwangi/sales_streamlit.git",
        tags: ["Streamlit", "Data Visualization", "Business Intelligence", "Snowflake", "Pandas", "Analytics"]
    },
    {
        id: 6,
        title: "Sales Forecasting with Machine Learning",
        description: "End-to-end forecasting system comparing classical time-series models and machine learning approaches for short-term sales prediction. The solution supports model evaluation, scenario analysis, and data-driven recommendations for inventory and marketing planning.",
        image: "images/projects/sales-forecastML.jpg",
        github: "https://github.com/Jose-Mwangi/Sales-forecasting-ML-models-and-datasets.git",
        tags: ["Python", "Machine Learning", "Time Series", "XGBoost", "ARIMA", "Prophet"]
    },
    {
        id: 7,
        title: "AI-Powered Customer Support Chatbot",
        description: "Intelligent conversational system built using a retrieval-augmented generation pipeline. Combines vector search with LLM reasoning to answer documentation-based queries, maintain conversation context, and support multi-turn dialogue in production environments.",
        image: "images/projects/chatbot.png",
        github: "https://github.com/Jose-Mwangi/chatbot_customer_support.git",
        tags: ["LangChain", "OpenAI", "Pinecone", "RAG", "NLP"]
    },
    {
        id: 8,
        title: "Enterprise Knowledge Retrieval System",
        description: "Production-grade knowledge retrieval platform featuring hybrid search, reranking, and evaluation pipelines. Designed to reduce hallucinations and improve answer relevance across enterprise documentation with continuous quality monitoring.",
        image: "images/projects/rag.jpg",
        github: "https://github.com/Jose-Mwangi/knowledge-retrieval",
        tags: ["LangChain", "Pinecone", "OpenAI", "RAG", "Vector DB"]
    },
    {
        id: 9,
        title: "Fine-tuned LLM for Agricultural Finance",
        description: "Domain-specific language model fine-tuned using LoRA techniques to support agricultural finance question answering. Deployed with cloud-based MLOps pipelines for monitoring, versioning, and inference scalability.",
        image: "images/projects/fine-tune.jpg",
        github: "https://github.com/Jose-Mwangi/agri-finance-llm",
        tags: ["Llama 2", "LoRA", "AWS SageMaker", "MLOps", "Fine-tuning"]
    },
    {
        id: 10,
        title: "Customer Intelligence Platform — MLOps with GenAI",
        description: "Advanced customer analytics system leveraging PCA and Generative AI to transform raw data into human-readable segment insights. Built with a robust MLOps framework including Prefect and MLflow, it provides real-time drift monitoring via Evidently AI. This platform directly bridges high-level ML modeling with actionable retail strategy.",
        image: "images/projects/customer-clustering.png",
        github: "https://github.com/Jose-Mwangi/customer-intelligence-mlops.git",
        tags: ["LLM", "MLOps", "Generative AI", "PCA", "KMeans"]
    },
    {
        id: 11,
        title: "Agentic Workflow Automation Platform",
        description: "Multi-agent system orchestrating analytical and data-processing tasks using collaborative AI agents. Designed to automate complex workflows through intelligent task delegation and tool reuse.",
        image: "images/projects/agentic.jpg",
        github: "https://github.com/Jose-Mwangi/workflow-automation",
        tags: ["AutoGen", "AI Agents", "Workflow Automation", "Python"]
    },
    {
        id: 12,
        title: "Credit Scoring MLOps Pipeline Agri-Finance",
        description: "Built end-to-end MLOps pipeline assessing credit risk for smallholder farmers using XGBoost and alternative data sources. Deployed production system with FastAPI, Docker, and automated monitoring achieving 89% F1-score in loan default prediction, increasing loan accessibility for 10,000+ farmers.",
        image: "images/projects/agri-scoring.png",
        github: "https://github.com/Jose-Mwangi/credit-scoring-mlops.git",
        tags: ["FastAPI REST", "MLOps", "Docker", "XGBoost", "Production","ZenMl"]
    }
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.parentElement.innerHTML='<span>Image Placeholder</span>'">
            </div>
            <div class="project-content">
                <a href="${project.github}" target="_blank" class="project-title">
                    ${project.title}
                </a>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', renderProjects);