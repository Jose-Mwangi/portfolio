// Project Data
const projects = [
    {
        id: 1,
        title: "High-Performance E-Commerce Backend Engine",
        description: "Production-ready RESTful API using FastAPI with high concurrency support, Redis caching, PostgreSQL transactions, and Stripe payment integration. Features JWT authentication, inventory management with stock safety, and comprehensive rate limiting.",
        image: "images/projects/ecommerce_stripe.jpg",
        github: "https://github.com/Jose-Mwangi/backend_project.git",
        tags: ["FastAPI", "PostgreSQL", "Redis", "Stripe", "Docker"]
    },
    {
        id: 2,
        title: "Distributed Web Scraper & News Aggregator",
        description: "Scalable distributed system using Scrapy and Celery to crawl multiple news sources with intelligent deduplication via SHA-256 hashing. Features parallel worker processing, MongoDB storage, and searchable FastAPI interface.",
        image: "images/projects/news_radar.jpg",
        github: "https://github.com/Jose-Mwangi/news_radar_project.git",
        tags: ["Scrapy", "Celery", "MongoDB", "FastAPI", "Docker"]
    },
    {
        id: 3,
        title: "E-Commerce Product Management System",
        description: "Backend system for online store handling product catalog, shopping cart, checkout with Stripe/PayPal integration, order tracking, admin dashboard, and automated email notifications with sales analytics.",
        image: "images/projects/laravel.jpg",
        github: "https://github.com/Jose-Mwangi/ecommerce-system.git",
        tags: ["Laravel", "PHP", "MySQL", "Stripe", "PayPal"]
    },
    {
        id: 4,
        title: "Automated Financial Reporting Workbook",
        description: "Excel-based system generating Balance Sheet, Income Statement, and Cash Flow Statement with real-time job costing. Features automatic budget vs. actual comparison, drill-down transaction views, and documented formulas for easy customization.",
        image: "images/projects/vba.jpg",
        github: "https://github.com/Jose-Mwangi/financial-reporting",
        tags: ["Excel VBA", "Financial Modeling", "Power Query", "Accounting"]
    },
    {
        id: 5,
        title: "Sales Performance BI Dashboard",
        description: "This project is a dynamic, multi-page Streamlit application (snowflake deployed)designed to transform raw retail transactional data into actionable business insights. Using the Sample Superstore dataset, the dashboard provides a high-level executive summary and granular deep-dives into regional performance, product profitability, and customer behavior.",
        image: "images/projects/salesboard_streamlit.jpg",
        github: "https://github.com/Jose-Mwangi/sales_streamlit.git",
        tags: ["Streamlit", "Data Visualization", "Business Intelligence", "Snowflake", "Pandas", "Analytics"]
    },
    {
        id: 6,
        title: "Sales Forecasting with Machine Learning",
        description: "Predictive analytics system comparing ARIMA, Prophet, Random Forest, and XGBoost models to forecast 3-month sales with 95% confidence intervals. Delivered actionable recommendations for inventory planning and marketing budget allocation.",
        image: "images/projects/sales-forecastML.jpg",
        github: "https://github.com/Jose-Mwangi/sales-forecasting",
        tags: ["Python", "Machine Learning", "Time Series", "XGBoost", "Prophet"]
    },
    {
        id: 7,
        title: "AI-Powered Customer Support Chatbot",
        description: "Intelligent chatbot using LangChain, OpenAI GPT-4, and Pinecone vector database with RAG pipeline for documentation retrieval. Achieved 88% answer accuracy with conversation memory and multi-turn dialogue management.",
        image: "images/projects/chatbot.png",
        github: "https://github.com/Jose-Mwangi/support-chatbot",
        tags: ["LangChain", "OpenAI", "Pinecone", "RAG", "NLP"]
    },
    {
        id: 8,
        title: "Enterprise Knowledge Retrieval System",
        description: "Production-grade RAG pipeline with hybrid search and reranking capabilities. Achieved 85% retrieval accuracy and 40% reduction in hallucination with robust evaluation framework and quality monitoring.",
        image: "images/projects/rag.jpg",
        github: "https://github.com/Jose-Mwangi/knowledge-retrieval",
        tags: ["LangChain", "Pinecone", "OpenAI", "RAG", "Vector DB"]
    },
    {
        id: 9,
        title: "Fine-tuned LLM for Agricultural Finance",
        description: "Applied LoRA fine-tuning to Llama 2 for domain-specific question answering in agricultural finance. Deployed to AWS SageMaker with MLOps monitoring, achieving 35% improvement in contextual accuracy.",
        image: "images/projects/fine-tune.jpg",
        github: "https://github.com/Jose-Mwangi/agri-finance-llm",
        tags: ["Llama 2", "LoRA", "AWS SageMaker", "MLOps", "Fine-tuning"]
    },
    {
        id: 10,
        title: "Multimodal Document Understanding System",
        description: "OCR and CLIP-based solution for text-image understanding in export documentation. Achieved 92% data extraction accuracy with automated validation pipeline handling multiple document formats.",
        image: "images/projects/multimodal.png",
        github: "https://github.com/Jose-Mwangi/document-understanding",
        tags: ["Computer Vision", "OCR", "CLIP", "NLP", "PyTorch"]
    },
    {
        id: 11,
        title: "Agentic Workflow Automation Platform",
        description: "Multi-agent collaboration system using AutoGen framework for orchestrating data analysis tasks. Achieved 60% reduction in manual processing time with intelligent task delegation and tool reusability.",
        image: "images/projects/agentic.jpg",
        github: "https://github.com/Jose-Mwangi/workflow-automation",
        tags: ["AutoGen", "AI Agents", "Workflow Automation", "Python"]
    },
    {
        id: 12,
        title: "Customer Segmentation Analytics",
        description: "Applied K-Means clustering and PCA for dimensionality reduction to identify profitable SME client segments. Delivered visualization dashboard with segment profiles and data-driven marketing strategy recommendations.",
        image: "images/projects/segment.jpg",
        github: "https://github.com/Jose-Mwangi/customer-segmentation",
        tags: ["Machine Learning", "K-Means", "PCA", "Python", "Data Science"]
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