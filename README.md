<img src="/static/header2.svg" alt="Replit スタック設定ガイド" class="header-svg">

<div align="center">

# Replit スタック設定ガイド

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)](https://streamlit.io/)

</div>

Replitでサポートされているスタック設定の総合ガイドへようこそ。このドキュメントでは、利用可能な技術スタック、その構造、および各スタックの使い方について詳しく説明します。

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
    A[Replitスタック] --> B[フルスタックJS]
    A --> C[Flask + Vanilla JS]
    A --> D[Streamlit]
    B --> E[フロントエンド<br/>React]
    B --> F[バックエンド<br/>Express]
    C --> G[バックエンド<br/>Flask]
    C --> H[フロントエンド<br/>Vanilla JS]
    D --> I[Pythonアプリケーション]
```

## 🚀 利用可能なスタック

- [フルスタックJavaScript (React + Express)](/stacks/fullstack-js.md)
- [Flask + Vanilla JavaScript](/stacks/flask-vanilla.md)
- [Streamlit](/stacks/streamlit.md)

## ⚡ クイックスタート

各スタックは異なるユースケースに最適化されています：

- **フルスタックJavaScript**: フロントエンドとバックエンドが分離された現代的なWebアプリケーション
- **Flask + Vanilla JS**: サーバーサイドレンダリングを使用する軽量Webアプリケーション
- **Streamlit**: データ中心のアプリケーションとダッシュボード

## 🔌 ポート設定

すべてのスタックは標準ポートを使用するように設定されています：
- フロントエンドアプリケーション：ポート5000
- バックエンドサービス：ポート8000

## 🛠️ 共通機能

すべてのスタック設定には以下が含まれます：

1. **開発サーバー**
   - ファイル変更時の自動リロード
   - エラー報告
   - デバッグモード

2. **アセット管理**
   - 静的ファイルの提供
   - 画像の最適化
   - CSS/JSのバンドル（該当する場合）

3. **セキュリティ**
   - CORS設定
   - XSS保護
   - CSRF保護

## 💡 サンプルプロジェクト

実装例をご覧ください：
- [フルスタックJS例](/examples/fullstack-js-example.md)
- [Flask例](/examples/flask-example.md)
- [Streamlit例](/examples/streamlit-example.md)

## 🤝 サポート

各スタックの詳細なドキュメントについては、上記のリンクをクリックしてください。各スタックガイドには以下が含まれます：
- 完全なフォルダ構造
- 設定の詳細
- 始め方ガイド
- ベストプラクティス
- よくある落とし穴
