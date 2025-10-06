
///admin-dashboard/src/pages/DashboardPage.tsx`typescript

import React, { useState, useEffect } from 'react';
import { adminApi } from '../services/adminApi';
import {
  Users,
  DollarSign,
  Flag,
  TrendingUp,
  Activity,
  UserCheck,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    premiumUsers: 0,
    totalRevenue: 0,
    pendingReports: 0,
    dailyMatches: 0,
    matchRate: 0,
    churnRate: 0,
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadStats();
    loadChartData();
  }, []);

  const loadStats = async () => {
    try {
      const response = await adminApi.get('/stats');
      setStats(response.data);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const loadChartData = async () => {
    try {
      const response = await adminApi.get('/stats/chart');
      setChartData(response.data);
    } catch (error) {
      console.error('Error loading chart data:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          icon={<Users size={24} />}
          color="blue"
          trend="+12%"
        />
        <StatCard
          title="Active Users (DAU)"
          value={stats.activeUsers.toLocaleString()}
          icon={<Activity size={24} />}
          color="green"
          trend="+8%"
        />
        <StatCard
          title="Premium Users"
          value={stats.premiumUsers.toLocaleString()}
          icon={<UserCheck size={24} />}
          color="purple"
          trend="+15%"
        />
        <StatCard
          title="Revenue (MTD)"
          value={`${stats.totalRevenue.toLocaleString()}`}
          icon={<DollarSign size={24} />}
          color="yellow"
          trend="+23%"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols->
    