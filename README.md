# Website Analysis & Performance Checker App

## Overview

A comprehensive web analytics and performance monitoring application that provides detailed insights into website traffic, performance metrics, and competitive analysis. Users can input any website URL and receive in-depth analytics similar to SimilarWeb, including traffic patterns, performance benchmarks, technology stack detection, and competitor insights.

### Key Capabilities
- **Traffic Analysis**: Unique visitors, page views, bounce rates, session duration
- **Performance Monitoring**: Page speed, TTFB, resource load times, mobile/desktop comparison
- **Technology Detection**: Frameworks, CMS, web servers, hosting providers
- **Competitive Intelligence**: Similar sites, traffic comparisons, market positioning
- **Historical Trends**: Time-series data with interactive charts and graphs
- **Export & Sharing**: CSV/PDF reports with customizable metrics

## Features

### Core Features
- ✅ URL-based website analysis
- ✅ Real-time traffic metrics dashboard
- ✅ Performance scoring and recommendations
- ✅ Technology stack identification
- ✅ Competitor analysis and suggestions
- ✅ Historical data tracking and trends
- ✅ Social sharing capabilities
- ✅ Admin dashboard with usage analytics

### Advanced Features
- 🔄 Real-time monitoring and alerts
- 🔄 API integration with Google Analytics, SEMrush
- 🔄 Custom dashboard creation
- 🔄 White-label solutions

## System Architecture

```mermaid
graph TB
    A[User Browser] --> B[Angular Frontend]
    B --> C[NestJS API Gateway]
    C --> D[Authentication Service]
    C --> E[Analysis Service]
    C --> F[Report Service]
    E --> G[Web Scraper Module]
    E --> H[Performance Checker]
    E --> I[Technology Detector]
    F --> J[Export Service]
    C --> K[Redis Cache]
    C --> L[PostgreSQL Database]
    E --> M[External APIs]
    
    subgraph "External Services"
        M --> N[Google PageSpeed API]
        M --> O[DNS Lookup Services]
        M --> P[Whois API]
    end
```

## Architecture Diagrams

### 1. System Overview Diagram

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Angular UI    │────│   NestJS API    │────│  PostgreSQL DB  │
│  (Frontend)     │    │   (Backend)     │    │   (Database)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │              ┌─────────────────┐              │
         └──────────────│  Redis Cache    │──────────────┘
                        │   (Caching)     │
                        └─────────────────┘
```

### 2. Data Flow Diagram

```
┌──────────┐    ┌──────────────┐    ┌─────────────────┐    ┌──────────────┐
│   User   │───▶│ URL Input    │───▶│ Validation &    │───▶│ Cache Check  │
│          │    │ Component    │    │ Sanitization    │    │              │
└──────────┘    └──────────────┘    └─────────────────┘    └──────────────┘
                                                                   │
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐    │
│   Dashboard     │◀───│ Data         │◀───│ Analysis        │◀───┘
│   Display       │    │ Aggregation  │    │ Engine          │
└─────────────────┘    └──────────────┘    └─────────────────┘
                                                   │
                                    ┌─────────────────┐
                                    │ External APIs   │
                                    │ • PageSpeed     │
                                    │ • DNS Lookup    │
                                    │ • Whois Data    │
                                    └─────────────────┘
```

### 3. Component Architecture (Angular)

```
AppComponent
├── HeaderComponent
├── NavigationComponent
├── DashboardComponent
│   ├── UrlInputComponent
│   ├── TrafficMetricsComponent
│   ├── PerformanceMetricsComponent
│   ├── TechnologyStackComponent
│   └── CompetitorAnalysisComponent
├── ReportsComponent
│   ├── ExportComponent
│   └── HistoricalTrendsComponent
└── AdminComponent
    ├── UsageStatsComponent
    └── SystemHealthComponent
```

## Installation

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Redis 6+
- Docker (optional)

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/naveenfullstack/zap.git
cd pac
```

2. **Install dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. **Environment setup**
```bash
# Copy environment files
cp backend/.env.example backend/.env
cp frontend/src/environments/environment.example.ts frontend/src/environments/environment.ts

# Update environment variables
# Database configuration, API keys, etc.
```

4. **Database setup**
```bash
# Run migrations
cd backend
npm run migration:run

# Seed initial data (optional)
npm run seed
```

5. **Start services**
```bash
# Start Redis (if not using Docker)
redis-server

# Start PostgreSQL (if not using Docker)
# See PostgreSQL documentation

# Start backend
cd backend
npm run start:dev

# Start frontend (in new terminal)
cd frontend
npm run serve
```

### Docker Setup

```bash
# Build and start all services
docker-compose up -d

# View services
docker-compose ps
```

## Performance Considerations

### Caching Strategy
- **Redis**: Cache frequently requested analyses (TTL: 1 hour)
- **Database**: Optimize queries with proper indexing
- **CDN**: Serve static assets and reports via CDN

### Scaling
- **Horizontal Scaling**: Multiple NestJS instances behind load balancer
- **Database Sharding**: Partition data by URL domain or date
- **Queue Management**: Use Bull Queue for background processing

### Code Standards
- **TypeScript**: Strict mode enabled
- **Linting**: ESLint + Prettier
- **Testing**: Cypress (e2e)

### Testing
```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e
```

**Built with ❤️ using Angular, NestJS, PostgreSQL, and Redis**