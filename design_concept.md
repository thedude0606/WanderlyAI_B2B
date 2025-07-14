# WanderlyAI B2B Insights Platform - Design Concept

## 1. General Styling & Branding
- **Inspiration**: Similar modern, clean, and engaging aesthetic as the consumer app, but with a more professional and data-focused feel.
- **Color Palette**: Utilize a primary palette of deep blues, purples, and teals for a sophisticated and trustworthy look, with accent colors (e.g., vibrant greens, oranges) for data highlights and calls to action. Maintain consistency with the consumer app's gradient usage where appropriate.
- **Typography**: Clean, sans-serif fonts for readability (e.g., Inter, Montserrat) for headings and body text. Use varying weights and sizes to establish clear hierarchy.
- **Icons**: Leverage Lucide icons (pre-installed) for consistency and scalability. Use filled icons for active states and outlined for inactive. Ensure icons are clear and intuitive for business metrics and actions.
- **Imagery**: Use high-quality, professional stock photos or generated images that convey data, insights, and business growth. Avoid overly casual or consumer-focused imagery.

## 2. Dashboard Home & KPIs
- **Layout**: Clean, modular layout with clear cards for key performance indicators (KPIs) at the top. Below the KPIs, display trend lines and charts for deeper insights.
- **KPI Cards**: Prominent display of "Total Spend Captured," "Commission Unlocked," and "Forecast Accuracy." Each card will have a large, bold number, a descriptive label, and a small trend indicator (up/down arrow with percentage change).
- **Trend Lines**: Use interactive line charts (Recharts) to show spend volume and model performance over time. Allow users to select different timeframes (e.g., daily, weekly, monthly).
- **Visuals**: Incorporate `kpi-icon.jpg` for general KPI representation, `dashboard-example.png` for overall dashboard layout inspiration, and `trend-graph.png` for trend line visualization.

## 3. Audience Builder with Predictive Spend
- **Layout**: A multi-panel interface. Left panel for filters, central panel for user preview and cohort summary, right panel for export/transfer options.
- **Filters**: Implement drag-and-drop or multi-select filters for segments like "Fine Diner," "Luxury Seeker," "Budget Conscious." Use clear labels and intuitive controls.
- **User Preview**: Display anonymized sample user cards with key demographic and spending habits (e.g., Hotels, Food, Alcohol, Excursions). Show "12,345 users" count prominently.
- **Export/Transfer**: Clear buttons for "Export to CSV," "Transfer to Meta," "The Trade Desk," "Amazon DSP," "Google." Use relevant platform logos or icons.
- **Visuals**: Utilize `audience-segmentation.jpg` for the overall concept of audience segmentation. Consider using simple bar charts or pie charts to visualize spending cohorts.

## 4. WanderlyAI Sponsored Offers
- **Layout**: Card-based layout for individual offers. A form for creating new campaigns.
- **Offer Cards**: Each card will display the offer details (e.g., "Save $500 on $5000 booking + $50 dining credit"), target segment, and a clear call to action.
- **Campaign Creation Form**: Intuitive form fields for selecting segments, defining credit boosts, and setting offer parameters. Use dropdowns and input fields.
- **Real-time Performance**: Display a dashboard section with "100 bookings, $1,200 spend, 4x ROI" using clear, concise metrics and possibly a small progress bar or gauge.
- **Visuals**: Use `campaign-dashboard.png` for inspiration on campaign performance display. `sponsored-offers-icon.jpg` for general sponsored offers representation.

## 5. Budget Simulator
- **Layout**: Input form on the left, projected ROI graph on the right.
- **Input Fields**: Allow users to input segment and credit boost values. Use sliders or numerical input fields.
- **Projected ROI Graph**: Display a clear, interactive graph showing projected incremental bookings and revenue lift. Allow for different scenarios to be compared.
- **Visuals**: `budget-forecasting.jpeg` for the input/output layout and `roi-graph.png` for the ROI projection chart.

## 6. Price-Parity Pulse
- **Layout**: Heatmap display at the top, followed by a list of top hotels with price gaps.
- **Heatmap**: A visual heatmap of U.S. cities showing average price gaps. Use a color gradient to indicate the severity of the gap (e.g., red for large gaps, green for small).
- **Hotel List**: A sortable list of top 10 hotels with the largest price gaps, including hotel name, OTA price, direct price, and percentage difference.
- **Visuals**: `price-heatmap.png` for the heatmap visualization. Consider using small hotel icons next to each listing.

## 7. Billing & Seat Management
- **Layout**: Tabbed interface for "Current Plan," "Usage," and "Team Members."
- **Current Plan**: Display current plan details, next invoice date, and upgrade options.
- **Usage Tracking**: API call usage meter with a clear progress bar or chart.
- **Team Members**: Table for adding/removing seats, assigning roles. Include search and filter options.
- **Visuals**: `billing-icon.png` for billing, `user-management.jpg` for team members, and `api-usage.png` for API usage tracking. Use simple bar charts for API usage over time.

## Overall User Experience
- **Responsiveness**: Ensure the B2B platform is fully responsive and optimized for various screen sizes, from large desktop monitors to tablets.
- **Interactivity**: Implement interactive elements where appropriate (e.g., hover effects, clickable cards, sortable tables, filter options).
- **Data Clarity**: Prioritize clear and concise data presentation. Use tooltips for additional information on graphs and charts.
- **Navigation**: Implement a clear and intuitive navigation system (e.g., sidebar navigation for main sections, breadcrumbs for sub-sections).

This design concept will guide the development of the WanderlyAI B2B Insights Platform, ensuring a consistent, professional, and highly functional user experience.

