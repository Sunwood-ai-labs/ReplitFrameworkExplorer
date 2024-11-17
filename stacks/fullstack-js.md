# フルスタックJavaScriptスタック

## 概要

フルスタックJavaScriptスタックは、フロントエンドにReact、バックエンドにExpressを組み合わせ、Webアプリケーション用の最新かつスケーラブルなアーキテクチャを提供します。

## ディレクトリ構造と関係図

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#6366f1',
    'primaryTextColor': '#fff',
    'primaryBorderColor': '#4f46e5',
    'lineColor': '#64748b',
    'secondaryColor': '#f1f5f9',
    'tertiaryColor': '#e2e8f0'
  }
}}%%

graph TD
    A[プロジェクトルート] --> B[フロントエンド]
    A --> C[バックエンド]
    B --> D[publicフォルダ]
    B --> E[srcフォルダ]
    B --> F[コンポーネント]
    C --> G[ルート定義]
    C --> H[コントローラー]
    C --> I[モデル]
    F --> J[APIリクエスト]
    G --> K[データベース]
    
    subgraph データフロー
    J --> G
    G --> H
    H --> I
    I --> K
    end
```

### フロントエンド構造
```
frontend/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── utils/
└── package.json
```

### バックエンド構造
```
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
└── package.json
```
