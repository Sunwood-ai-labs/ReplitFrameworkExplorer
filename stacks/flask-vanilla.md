# Flask + Vanilla JavaScript スタック

## 📝 概要

このスタックは、バックエンド処理にFlask、フロントエンドのインタラクティビティにバニラJavaScriptを組み合わせており、軽量なWebアプリケーションに最適です。

## 🗂️ ディレクトリ構造と関係図

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
    A[アプリケーションルート] --> B[静的ファイル]
    A --> C[テンプレート]
    A --> D[Pythonモジュール]
    B --> E[JavaScript]
    B --> F[CSS]
    B --> G[画像]
    C --> H[HTMLテンプレート]
    D --> I[ビュー]
    D --> J[モデル]
    
    subgraph データフロー
    E --> I
    I --> J
    J --> H
    H --> E
    end
```

### プロジェクト構造
```
flask_app/
├── static/
│   ├── js/
│   ├── css/
│   └── img/
├── templates/
├── models/
├── views/
└── app.py
```
