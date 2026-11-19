export const SECTIONS = {
      me: {
        label: 'Me', kicker: 'whoami', title: 'AI Infrastructure Engineer',
        body: 'I build and run production ML systems end to end — from agentic AI that closed an enterprise deal to the Kubernetes clusters and access-control systems underneath it.',
        stats: [
          { value: '2+ yrs', label: 'running production ML infra' },
          { value: '$30K/yr', label: 'infra savings delivered' },
          { value: 'AWS SA', label: 'Solutions Architect – Associate' }
        ],
        groups: [
          { heading: 'Also', meta: '', bullets: [['Self-taught', 'Kubernetes & AWS, no formal onboarding']], chips: [] }
        ]
      },
      monitor: {
        label: 'Experience', kicker: 'experience.log', title: 'Experience', body: '',
        stats: [],
        groups: [
          { heading: 'AI Infrastructure Engineer · Louisa', meta: 'Jul 2024 – present', chips: [], bullets: [
            ['Won a client', 'Multi-agent AI system (Pydantic AI + Gemini)'],
            ['4M+ vectors', 'RAG infra with hybrid search'],
            ['$30K/yr saved', 'Qdrant → Databricks Vector Search'],
            ['74% less CPU', 'EKS pods right-sized via load tests'],
            ['2 days → 30 min', 'Automated client onboarding'],
            ['2+ hrs/release', 'QA time saved by LLM eval framework'],
            ['~15/week', 'Access requests automated, SOC2-ready'],
            ['0 long-lived keys', 'KMS-backed CA + IAM Roles Anywhere'],
            ['2 interns', 'Mentored as AI tech lead']
          ] },
          { heading: 'Software Engineering Intern · Louisa', meta: 'Jan – Jul 2024', chips: [], bullets: [
            ['30K+/day', 'News articles into S3 Delta Lake'],
            ['Daily batch', 'Airflow cleaning & filtering job'],
            ['Entity resolution', 'People & orgs mapped to internal IDs']
          ] },
          { heading: 'Notable clients', meta: '', bullets: [], chips: ['Insight Partners', 'McKinsey', 'JP Morgan', 'Royal Bank of Canada', 'Apollo'] }
        ]
      },
      trophies: {
        label: 'Impact trophies', kicker: 'achievements.unlocked', title: 'Impact trophies', body: '',
        stats: [
          { value: '~$30K/yr', label: 'saved moving Qdrant → Databricks Vector Search' },
          { value: '74% CPU', label: 'reduction on EKS pods via load testing' },
          { value: '52% mem', label: 'reduction, ~50% cost cut (~$7.5K/yr)' },
          { value: '2d → 30m', label: 'new-client onboarding time' },
          { value: '4M+', label: 'vectors indexed for RAG' },
          { value: '30K+/day', label: 'news articles processed' },
          { value: '~15/wk', label: 'access requests automated' },
          { value: '2+ hrs', label: 'QA time saved per release' }
        ],
        groups: []
      },
      cert: {
        label: 'Certificate', kicker: 'certs/', title: 'AWS Certified Solutions Architect – Associate',
        body: 'Earned while teaching myself Kubernetes and AWS on the job.', stats: [], groups: []
      },
      diploma: {
        label: 'Diploma', kicker: 'education/', title: 'B.E. Computer Science · NMAMIT, Nitte', body: '',
        stats: [ { value: '2020–24', label: 'Bachelor of Engineering' }, { value: '8.9', label: 'CGPA' } ], groups: []
      },
      cork: {
        label: 'Side projects', kicker: 'side-projects/', title: 'Side projects', body: '', stats: [],
        groups: [
          { heading: 'Daily Work Logger', meta: 'Claude Code · n8n · Notion', chips: [], bullets: [['Hands-free logs', 'Discord bot → n8n → Notion']] },
          { heading: 'Family home media server', meta: 'Ubuntu Server · Docker · Tailscale · Jellyfin · ZimaOS', chips: [], bullets: [
            ['Jellyfin + ZimaOS', 'Docker stack, VPN-routed downloads'],
            ['Tailscale', 'Remote admin + boot-order systemd fix']
          ] }
        ]
      },
      books: {
        label: 'Skills', kicker: 'toolbox/', title: 'Skills', body: '', stats: [],
        groups: [
          { heading: 'Cloud & platform', meta: '', bullets: [], chips: ['AWS EKS', 'IAM', 'IAM Roles Anywhere', 'Cognito', 'KMS', 'Lambda', 'ECR', 'S3', 'Kubernetes', 'Docker', 'Terraform', 'GCP / GKE', 'Load testing', 'Cost optimization'] },
          { heading: 'Security & access', meta: '', bullets: [], chips: ['IAM & access control', 'SOC2 access reviews', 'Secret rotation', 'PKI / private CA', 'Multi-tenant onboarding'] },
          { heading: 'AI / ML infrastructure', meta: '', bullets: [], chips: ['Agentic AI', 'Multi-agent systems', 'RAG', 'LLM APIs', 'Function calling', 'Embeddings', 'Qdrant', 'Databricks Vector Search', 'LLM evaluation', 'Model serving', 'Pydantic AI'] },
          { heading: 'Data engineering', meta: '', bullets: [], chips: ['Airflow', 'Delta Lake', 'MongoDB', 'PostgreSQL', 'Elasticsearch', 'S3'] },
          { heading: 'Languages', meta: '', bullets: [], chips: ['Python', 'SQL', 'HTML / CSS'] }
        ]
      },
      cat: {
        label: 'Dora', kicker: 'personal-assistant', title: 'Dora, my personal assistant',
        body: 'Supervises every deploy from the warm corner of the desk. Accepts head pats as payment.', stats: [], groups: []
      },
      guitar: {
        label: 'Guitar', kicker: 'off-the-clock/', title: 'Electric guitar',
        body: 'My hobby when the pods are healthy and the pager is quiet: an electric guitar plugged straight into the amp. Click the guitar for a riff (turn your volume down a little first).', stats: [], groups: []
      },
      window: {
        label: 'Window', kicker: 'ping advika', title: 'Say hi',
        body: 'Open to chatting about AI infra, platform engineering — or cats.', stats: [], groups: []
      }
};

export const SPOTS = [
      ['window', 8, 16, 56, 52], ['cert', 72, 20, 34, 28], ['diploma', 106, 20, 34, 28],
      ['trophies', 142, 28, 80, 27], ['cork', 68, 50, 60, 38],
      ['books', 6, 84, 48, 70], ['monitor', 136, 72, 58, 18], ['me', 147, 84, 40, 72],
      ['cat', 188, 90, 30, 22], ['guitar', 54, 88, 51, 64]
];
