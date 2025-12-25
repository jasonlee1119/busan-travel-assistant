# 釜山旅遊小幫手 (Busan Travel Assistant)

一個基於 **React** 的前端旅遊小工具，幫助用戶規劃釜山行程，查看天氣、航班、住宿資訊，並管理個人備忘錄。  
此專案 **純前端**，無後端，資料透過第三方 API 或 local JSON 模擬。

---
## 功能清單

### 1. 天氣資訊 (Weather)

- 顯示釜山當前天氣（溫度、天氣狀態、風速等）
- 顯示未來 3~5 天天氣預報
- 支援單位切換：℃ / ℉
- 支援 Loading 與錯誤提示

### 2. 航班資訊 (Flight Info)

- 顯示飛往釜山的航班列表（航班號、時間、航空公司）
- 搜尋特定日期或航空公司
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
- 支援拖拉調整行程順序
- 可複製/重置模板行程
- 景點資料可用本地 JSON 或第三方旅遊 API

### 5. 個人備忘錄 (Memo / Notes)

- 可新增、編輯、刪除備忘
- 可針對行程或日期做標記
- 資料存於 localStorage（無後端）

### 6. 可選進階功能

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
  - 行程資訊、備忘錄 → Context 或 Zustand
  - 主題（深色 / 淺色） → ThemeProvider + localStorage
- **API Fetch**
  - 天氣、航班資訊 → 透過第三方 API
  - 住宿、景點 → 可先用 mock JSON

---

## MVP 開發優先順序

1. 天氣資訊
2. 個人備忘錄
3. 行程資訊（五天行程卡片）
4. 住宿資訊（假資料即可）
5. 航班資訊（API 可用性低，可先 mock）

