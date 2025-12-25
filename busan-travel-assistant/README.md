# 釜山旅遊小幫手 (Busan Travel Assistant)

一個基於 **React** 的前端旅遊小工具，幫助旅遊當下查看天氣、航班、匯率、住宿資訊，並管理個人備忘錄。  
此專案 **純前端**，無後端，資料透過第三方 API 或 local JSON 模擬。

---

## 功能清單

### 1. 天氣資訊 (Weather)

- 顯示釜山當前天氣（溫度、天氣狀態、風速等）
- 顯示未來 3~5 天天氣預報
- 支援單位：℃
- 支援 Loading 與錯誤提示

### 2. 航班資訊 (Flight Info)

- 顯示飛往釜山的航班列表（航班號、時間、航空公司）
- 即時狀態顯示（延誤/準時）
- 可用假資料模擬（純前端）

### 3. 住宿資訊 (Accommodations)

- 顯示熱門飯店/民宿列表
- 支援篩選價格、星級、區域
- 顯示名稱、價格、評分、距離景點等資訊
- 可先用本地 JSON 模擬資料

### 4. 行程資訊 (Itinerary / 5-Day Plan)

- 五天行程安排
- 每天可新增景點、餐廳或活動
- 景點資料可用本地 JSON 或第三方旅遊 API

### 5. 個人備忘錄 (Memo / Notes)

- 可新增、編輯、刪除備忘
- 行前確認項目備忘清單
- 可針對行程或日期做標記
- 資料存於 localStorage（無後端）

### 6. 匯率計算機 (Currency Converter)

提供旅途中快速且直覺的匯率換算功能，方便使用者即時掌握消費金額，特別適合釜山旅遊情境。

- 支援多國貨幣即時換算  
  - 台幣（TWD）
  - 韓元（KRW）
- 即時輸入金額，即時顯示換算結果
- 支援貨幣快速交換（From ↔ To）
- 換算結果可設定保留小數點後 1～2 位
- 顯示匯率更新時間
- 支援深色 / 淺色主題

**技術實作說明**
- 純前端實作，無後端服務
- 匯率資料來自第三方免費匯率 API
- 當 API 無法使用時，自動 fallback 至本地預設匯率
- 匯率資料可快取於 localStorage，減少重複請求

**使用情境**
- 行程規劃時快速換算餐費、交通費
- 住宿頁面顯示房價換算
- 備忘錄中記錄每日預算與實際花費

### 7. 可選進階功能

- 深淺色主題切換（MUI ThemeProvider + localStorage）
- 收藏景點或行程
- 地圖視覺化（Google Maps / Kakao Map API）

---

## 技術棧

- **前端框架**：React + TypeScript
- **UI 元件**：Material-UI (MUI v7)
- **狀態管理**：Zustand / useState / localStorage
- **路由管理**：React Router
- **API 請求**：axios
- **樣式**：Tailwind CSS (可搭配 MUI sx)

---

## 資料管理建議

- **Global State**
  - 行程資訊、備忘錄 → Zustand + localStorage
  - 主題（深色 / 淺色） → ThemeProvider + localStorage
- **API Fetch**
  - 天氣、航班、匯率 → 透過第三方 API
  - 住宿、景點 → 可先用 mock JSON

---

## MVP 開發優先順序

1. 天氣資訊
2. 匯率計算機
3. 個人備忘錄
4. 行程資訊（五天行程卡片）
5. 住宿資訊（假資料即可）
6. 航班資訊（API 可用性低，可先 mock）
