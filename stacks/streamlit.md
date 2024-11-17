# Streamlit スタック

## 📝 概要

Streamlitは、Pythonを使用してデータアプリケーションやダッシュボードを迅速に開発することを可能にします。

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
    A[Streamlitアプリ] --> B[ページ]
    A --> C[データ処理]
    A --> D[可視化]
    B --> E[メインページ]
    B --> F[サブページ]
    C --> G[データ取得]
    C --> H[データ変換]
    D --> I[グラフ]
    D --> J[チャート]
    
    subgraph データフロー
    G --> H
    H --> I
    H --> J
    end
```

### プロジェクト構造
```
streamlit_app/
├── pages/
├── data/
├── utils/
├── components/
└── app.py
```
