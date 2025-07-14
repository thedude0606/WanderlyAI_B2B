import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Target, 
  MapPin, 
  Settings, 
  CreditCard, 
  UserPlus, 
  Download, 
  ExternalLink,
  Filter,
  Calendar,
  Building,
  Zap,
  Eye,
  Send,
  ChevronRight,
  Activity,
  Globe,
  Briefcase,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  LineChart as LineChartIcon,
  Receipt,
  Hotel,
  Utensils,
  Wine,
  Camera,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react'
import './App.css'

// Import platform logos
import tradeDeskLogo from './assets/tradedesk-logo.png'
import metaLogo from './assets/meta-logo.png'
import amazonLogo from './assets/amazon-logo.png'
import googleLogo from './assets/google-logo.png'

// Sample data for charts
const spendData = [
  { month: 'Jan', spend: 45000, commission: 4500 },
  { month: 'Feb', spend: 52000, commission: 5200 },
  { month: 'Mar', spend: 48000, commission: 4800 },
  { month: 'Apr', spend: 61000, commission: 6100 },
  { month: 'May', spend: 55000, commission: 5500 },
  { month: 'Jun', spend: 67000, commission: 6700 }
]

const forecastData = [
  { month: 'Jan', accuracy: 92 },
  { month: 'Feb', accuracy: 94 },
  { month: 'Mar', accuracy: 89 },
  { month: 'Apr', accuracy: 96 },
  { month: 'May', accuracy: 93 },
  { month: 'Jun', accuracy: 97 }
]

const audienceData = [
  { name: 'Luxury Seekers', value: 35, color: '#00D09C' },
  { name: 'Budget Conscious', value: 28, color: '#FF6B35' },
  { name: 'Fine Diners', value: 22, color: '#5AC8FA' },
  { name: 'Adventure Travelers', value: 15, color: '#FFD60A' }
]

const revenueBreakdownData = [
  { category: 'Accommodations', value: 185000, color: '#00D09C' },
  { category: 'Food & Beverage', value: 89000, color: '#FF6B35' },
  { category: 'Excursions', value: 54000, color: '#5AC8FA' }
]

const forecastRevenueData = [
  { category: 'Accommodations', current: 185000, forecast: 245000 },
  { category: 'Food & Beverage', current: 89000, forecast: 125000 },
  { category: 'Excursions', current: 54000, forecast: 78000 }
]

const priceGapData = [
  { city: 'New York', avgGap: 15.2, hotels: 45 },
  { city: 'Los Angeles', avgGap: 12.8, hotels: 38 },
  { city: 'Miami', avgGap: 18.5, hotels: 29 },
  { city: 'Chicago', avgGap: 10.3, hotels: 33 },
  { city: 'Las Vegas', avgGap: 22.1, hotels: 52 }
]

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [selectedSegment, setSelectedSegment] = useState('')
  const [dollarOffered, setDollarOffered] = useState(100)
  const [offerCategory, setOfferCategory] = useState('accommodations')

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">Last 30 days</span>
        </div>
      </div>
      
      {/* Enhanced KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-green-400 to-green-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Receipts Uploaded</CardTitle>
            <Receipt className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12,847</div>
            <p className="text-xs opacity-80 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +18.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Offers Redeemed</CardTitle>
            <Target className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,156</div>
            <p className="text-xs opacity-80 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              +24.7% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-700 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">30-Day Forecast</CardTitle>
            <TrendingUp className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$448K</div>
            <p className="text-xs opacity-80 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              Revenue opportunity
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Audiences Activated</CardTitle>
            <Users className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">847</div>
            <p className="text-xs opacity-80 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              Across 4 platforms
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
              Incremental Revenue Generated
            </CardTitle>
            <CardDescription>Revenue breakdown by category from sponsored offers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueBreakdownData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {item.category === 'Accommodations' && <Hotel className="h-5 w-5 text-green-600" />}
                    {item.category === 'Food & Beverage' && <Utensils className="h-5 w-5 text-orange-600" />}
                    {item.category === 'Excursions' && <Camera className="h-5 w-5 text-blue-600" />}
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold" style={{ color: item.color }}>
                      ${item.value.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">+12.5% vs last month</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Send className="h-5 w-5 mr-2 text-blue-600" />
              Platforms Activated
            </CardTitle>
            <CardDescription>Audience distribution across advertising platforms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={tradeDeskLogo} alt="The Trade Desk" className="h-8 w-auto" />
                  <span className="font-medium">Trade Desk</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">234</div>
                  <div className="text-xs text-gray-500">audiences</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={metaLogo} alt="Meta" className="h-8 w-auto" />
                  <span className="font-medium">Meta</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">189</div>
                  <div className="text-xs text-gray-500">audiences</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={amazonLogo} alt="Amazon" className="h-8 w-auto" />
                  <span className="font-medium">Amazon DSP</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">156</div>
                  <div className="text-xs text-gray-500">audiences</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={googleLogo} alt="Google" className="h-8 w-auto" />
                  <span className="font-medium">Google Ads</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-blue-600">268</div>
                  <div className="text-xs text-gray-500">audiences</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <LineChartIcon className="h-5 w-5 mr-2 text-green-600" />
              Spend Volume & Commission Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={spendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Line type="monotone" dataKey="spend" stroke="#00D09C" strokeWidth={3} dot={{ fill: '#00D09C', strokeWidth: 2, r: 6 }} />
                <Line type="monotone" dataKey="commission" stroke="#FF6B35" strokeWidth={3} dot={{ fill: '#FF6B35', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <BarChartIcon className="h-5 w-5 mr-2 text-purple-600" />
              Model Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: '1px solid #e0e0e0', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Bar dataKey="accuracy" fill="url(#purpleGradient)" radius={[4, 4, 0, 0]} />
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.6}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderAudienceBuilder = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Audience Builder</h1>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Download className="h-4 w-4 mr-2" />
          Export Audience
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Filter className="h-5 w-5 mr-2 text-blue-600" />
                Segment Filters
              </CardTitle>
              <CardDescription>Drag and drop filters to build your custom audience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Travel Preference</Label>
                  <Select>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Select preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="luxury">Luxury Seekers</SelectItem>
                      <SelectItem value="budget">Budget Conscious</SelectItem>
                      <SelectItem value="fine-dining">Fine Diners</SelectItem>
                      <SelectItem value="adventure">Adventure Travelers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Predicted Hotel Spend</Label>
                  <Select>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10000+">$10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>F&B Spend Prediction</Label>
                  <Select>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-500">$0 - $500</SelectItem>
                      <SelectItem value="500-2000">$500 - $2,000</SelectItem>
                      <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                      <SelectItem value="5000+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Excursion Spend</Label>
                  <Select>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-200">$0 - $200</SelectItem>
                      <SelectItem value="200-1000">$200 - $1,000</SelectItem>
                      <SelectItem value="1000-3000">$1,000 - $3,000</SelectItem>
                      <SelectItem value="3000+">$3,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-green-800">Audience Preview</h3>
                    <p className="text-green-600">12,345 users match your criteria</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                  <img src={tradeDeskLogo} alt="Trade Desk" className="h-4 w-4 mr-2" />
                  Push to Trade Desk
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                  <img src={metaLogo} alt="Meta" className="h-4 w-4 mr-2" />
                  Push to Meta
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white flex-1">
                  <img src={amazonLogo} alt="Amazon" className="h-4 w-4 mr-2" />
                  Push to Amazon
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 text-white flex-1">
                  <img src={googleLogo} alt="Google" className="h-4 w-4 mr-2" />
                  Push to Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <PieChartIcon className="h-5 w-5 mr-2 text-purple-600" />
                Spending Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={audienceData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {audienceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="mt-4 space-y-2">
                {audienceData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderSponsoredOffers = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Sponsored Offers</h1>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Target className="h-4 w-4 mr-2" />
          Create New Campaign
        </Button>
      </div>

      <Tabs defaultValue="campaigns" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100">
          <TabsTrigger value="campaigns" className="data-[state=active]:bg-white">Active Campaigns</TabsTrigger>
          <TabsTrigger value="forecast" className="data-[state=active]:bg-white">Revenue Forecast</TabsTrigger>
        </TabsList>
        
        <TabsContent value="campaigns" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                Campaign Builder
              </CardTitle>
              <CardDescription>Create targeted offers with custom dollar amounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Target Segment</Label>
                  <Select value={selectedSegment} onValueChange={setSelectedSegment}>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Select segment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="luxury">Luxury travelers ($10k+ predicted spend)</SelectItem>
                      <SelectItem value="lastminute">Last minute deal seekers</SelectItem>
                      <SelectItem value="foodie">Fine dining enthusiasts</SelectItem>
                      <SelectItem value="adventure">Adventure seekers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>$ Offered</Label>
                  <Input 
                    type="number" 
                    value={dollarOffered} 
                    onChange={(e) => setDollarOffered(Number(e.target.value))}
                    className="border-gray-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={offerCategory} onValueChange={setOfferCategory}>
                    <SelectTrigger className="border-gray-200">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="accommodations">
                        <div className="flex items-center space-x-2">
                          <Hotel className="h-4 w-4" />
                          <span>Accommodations</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="food">
                        <div className="flex items-center space-x-2">
                          <Utensils className="h-4 w-4" />
                          <span>Food & Beverage</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="excursions">
                        <div className="flex items-center space-x-2">
                          <Camera className="h-4 w-4" />
                          <span>Excursions</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                Launch Campaign
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Luxury Traveler Campaign</CardTitle>
                <CardDescription>$500 off $5000 booking + $50 dining credit</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bookings</span>
                    <span className="font-semibold">127</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg Spend</span>
                    <span className="font-semibold">$1,850</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ROI</span>
                    <Badge className="bg-green-100 text-green-800">4.2x</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-gray-500">85% of budget utilized</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Last Minute Deals</CardTitle>
                <CardDescription>$100 off bookings + 20% dining discount</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Bookings</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Avg Spend</span>
                    <span className="font-semibold">$950</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ROI</span>
                    <Badge className="bg-green-100 text-green-800">3.8x</Badge>
                  </div>
                  <Progress value={62} className="h-2" />
                  <p className="text-xs text-gray-500">62% of budget utilized</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="forecast" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Revenue Forecast by Category
              </CardTitle>
              <CardDescription>Projected revenue impact from sponsored offers over next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {forecastRevenueData.map((item, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {item.category === 'Accommodations' && <Hotel className="h-6 w-6 text-green-600" />}
                        {item.category === 'Food & Beverage' && <Utensils className="h-6 w-6 text-orange-600" />}
                        {item.category === 'Excursions' && <Camera className="h-6 w-6 text-blue-600" />}
                        <h3 className="text-lg font-semibold">{item.category}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Projected Growth</div>
                        <div className="text-lg font-bold text-green-600">
                          +{Math.round(((item.forecast - item.current) / item.current) * 100)}%
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-500">Current Revenue</div>
                        <div className="text-2xl font-bold text-gray-900">
                          ${item.current.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Forecasted Revenue</div>
                        <div className="text-2xl font-bold text-green-600">
                          ${item.forecast.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Progress 
                        value={(item.current / item.forecast) * 100} 
                        className="h-3"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderPriceParity = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Price-Parity Pulse</h1>
        <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
          <Activity className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">Real-time data</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <MapPin className="h-5 w-5 mr-2 text-red-600" />
              Top 10 Hotels - Largest Price Gaps
            </CardTitle>
            <CardDescription>Cities with the highest OTA vs direct booking price differences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {priceGapData.map((city, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <h3 className="font-semibold">{city.city}</h3>
                    <p className="text-sm text-gray-500">{city.hotels} hotels analyzed</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{city.avgGap}%</div>
                    <div className="text-sm text-gray-500">avg gap</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
              Best Performing Markets
            </CardTitle>
            <CardDescription>Markets with competitive pricing advantages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-green-800">San Francisco</h3>
                    <p className="text-sm text-green-600">Direct booking advantage</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">-5.2%</div>
                    <div className="text-sm text-green-500">below OTA rates</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-green-800">Seattle</h3>
                    <p className="text-sm text-green-600">Competitive positioning</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">-3.1%</div>
                    <div className="text-sm text-green-500">below OTA rates</div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-blue-800">Denver</h3>
                    <p className="text-sm text-blue-600">Price parity achieved</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">0.8%</div>
                    <div className="text-sm text-blue-500">minimal gap</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderBilling = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Billing & Seat Management</h1>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <CreditCard className="h-4 w-4 mr-2" />
          Upgrade Plan
        </Button>
      </div>

      <Tabs defaultValue="plans" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger value="plans" className="data-[state=active]:bg-white">Current Plan</TabsTrigger>
          <TabsTrigger value="usage" className="data-[state=active]:bg-white">Usage & Billing</TabsTrigger>
          <TabsTrigger value="team" className="data-[state=active]:bg-white">Team Management</TabsTrigger>
        </TabsList>
        
        <TabsContent value="plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-800">Professional Plan</CardTitle>
                <CardDescription className="text-blue-600">Current Plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-blue-600 mb-4">$299/month</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Up to 10 team members</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />100,000 API calls/month</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Advanced analytics</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Priority support</li>
                </ul>
                <Badge className="mt-4 bg-blue-100 text-blue-800">Active</Badge>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Enterprise Plan</CardTitle>
                <CardDescription>Recommended</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-900 mb-4">$599/month</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Unlimited team members</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />500,000 API calls/month</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom integrations</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Dedicated support</li>
                </ul>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">Upgrade</Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">Custom Plan</CardTitle>
                <CardDescription>For large enterprises</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-900 mb-4">Contact Us</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom team size</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Custom API limits</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />White-label options</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />SLA guarantees</li>
                </ul>
                <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Billing Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label className="text-sm text-gray-500">Next billing date</Label>
                  <p className="text-lg font-semibold">January 15, 2025</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Payment method</Label>
                  <p className="text-lg font-semibold">•••• •••• •••• 4242</p>
                </div>
                <div>
                  <Label className="text-sm text-gray-500">Billing email</Label>
                  <p className="text-lg font-semibold">billing@company.com</p>
                </div>
              </div>
              <Button variant="outline" className="mt-4 border-gray-300">
                <Settings className="h-4 w-4 mr-2" />
                Update Billing Info
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Team Members</CardTitle>
              <CardDescription>Manage your team access and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">John Smith</h3>
                    <p className="text-sm text-gray-500">john@company.com • Admin</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">sarah@company.com • Editor</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold">Mike Chen</h3>
                    <p className="text-sm text-gray-500">mike@company.com • Viewer</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>
                </div>
              </div>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                <UserPlus className="h-4 w-4 mr-2" />
                Invite Team Member
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboard()
      case 'audience':
        return renderAudienceBuilder()
      case 'offers':
        return renderSponsoredOffers()
      case 'pricing':
        return renderPriceParity()
      case 'billing':
        return renderBilling()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">WanderlyAI</h1>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">B2B Insights Platform</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-gray-300">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              JS
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <Button
              variant={activeSection === 'dashboard' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeSection === 'dashboard' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('dashboard')}
            >
              <BarChart3 className="h-4 w-4 mr-3" />
              Dashboard
            </Button>
            <Button
              variant={activeSection === 'audience' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeSection === 'audience' ? 'bg-orange-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('audience')}
            >
              <Users className="h-4 w-4 mr-3" />
              Audience Builder
            </Button>
            <Button
              variant={activeSection === 'offers' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeSection === 'offers' ? 'bg-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('offers')}
            >
              <Target className="h-4 w-4 mr-3" />
              Sponsored Offers
            </Button>
            <Button
              variant={activeSection === 'pricing' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeSection === 'pricing' ? 'bg-pink-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('pricing')}
            >
              <MapPin className="h-4 w-4 mr-3" />
              Price-Parity Pulse
            </Button>
            <Button
              variant={activeSection === 'billing' ? 'default' : 'ghost'}
              className={`w-full justify-start ${activeSection === 'billing' ? 'bg-teal-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => setActiveSection('billing')}
            >
              <CreditCard className="h-4 w-4 mr-3" />
              Billing & Seats
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App

