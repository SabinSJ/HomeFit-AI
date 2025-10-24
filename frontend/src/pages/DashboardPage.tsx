import React from 'react';

import "../assets/styles/dashboard.css";

const DashboardPage: React.FC = () => {
    return (
  <div className="app-layout">
    {/* <!-- Sidebar Navigation --> */}
    {/* <Sidebar /> */}

    {/* <!-- Main Content --> */}
    <main className="main-content">
      {/* <!-- Animated Background --> */}
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* <!-- Hero Section --> */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-badge">
            <span className="pulse-dot"></span>
            <span>AI Powered Fitness</span>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">Your Personal</span>
            <span className="gradient-text">AI Trainer</span>
          </h1>
          <p className="hero-subtitle">
            Advanced pose detection and real-time form correction powered by machine learning
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-value">98%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-value">Real-time</div>
              <div className="stat-label">Feedback</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-icon">🔥</div>
              <div className="stat-value">24/7</div>
              <div className="stat-label">Available</div>
            </div>
          </div>

          {/* <!-- Quick Start Button --> */}
          <button className="cta-button">
            <span>🚀 Setup Your AI Profile</span>
            <span className="button-arrow">→</span>
          </button>
        </div>
      </section>

      {/* <!-- Workout Categories --> */}
      <section className="workouts-section">
        <div className="section-header">
          <div>
            <h2>Exercise Library</h2>
            <p>Choose exercises by muscle group - AI will guide your form</p>
          </div>
          <div className="view-toggle">
            {/* <button :className="{ active: viewMode === 'categories' }" @click="viewMode = 'categories'">
              Categories
            </button> */}
            {/* <button :className="{ active: viewMode === 'all' }" @click="viewMode = 'all'">
              All Exercises
            </button> */}
          </div>
        </div>

        {/* <!-- Categories View --> */}
        {/* <div v-if="viewMode === 'categories'" className="categories-grid">
          <div
            v-for="category in muscleGroups"
            :key="category.name"
            className="category-card"
            @click="selectedCategory = category.name"
          >
            <div className="category-icon">{{ category.icon }}</div>
            <h3>{{ category.name }}</h3>
            <p className="exercise-count">{{ category.exercises.length }} exercises</p>
            <div className="category-exercises">
              <span v-for="ex in category.exercises.slice(0, 3)" :key="ex.name">
                {{ ex.name }}
              </span>
              <span v-if="category.exercises.length > 3" className="more">
                +{{ category.exercises.length - 3 }} more
              </span>
            </div>
          </div>
        </div> */}

        {/* <!-- Selected Category Exercises --> */}
        <div v-if="selectedCategory" className="exercises-list">
          <div className="list-header">
            {/* <button @click="selectedCategory = null" className="back-btn">← Back to Categories</button> */}
            {/* <h3>{{ selectedCategory }} Exercises</h3> */}
          </div>

          <div className="exercise-cards">
            {/* <div
              v-for="exercise in getExercisesForCategory(selectedCategory)"
              :key="exercise.name"
              className="exercise-card"
              :className="{ available: exercise.available }"
              @click="startExercise(exercise)"
            >
              <div className="exercise-badge" :className="exercise.available ? 'available' : 'coming-soon'">
                {{ exercise.available ? 'Available' : 'Coming Soon' }}
              </div>
              <div className="exercise-icon">{{ exercise.emoji }}</div>
              <h4>{{ exercise.name }}</h4>
              <p className="exercise-description">{{ exercise.description }}</p>
              <div className="exercise-features">
                <span v-if="exercise.available" className="feature">✓ AI Form Check</span>
                <span v-if="exercise.available" className="feature">✓ Auto Count</span>
                <span v-if="!exercise.available" className="feature disabled">⏳ In Development</span>
              </div>
              <button className="exercise-btn" :disabled="!exercise.available">
                {{ exercise.available ? 'Start Exercise' : 'Coming Soon' }}
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* <!-- Quick Stats Dashboard --> */}
      <section className="dashboard-section">
        <div className="section-header">
          <h2>Your Stats</h2>
          <p>Track your progress at a glance</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <span className="card-icon-small">📊</span>
              <h4>Total Workouts</h4>
            </div>
            <div className="card-value">
              <span className="big-number">0</span>
              <span className="value-label">sessions</span>
            </div>
            <div className="card-footer">
              <span className="trend neutral">Start your first workout!</span>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <span className="card-icon-small">🔥</span>
              <h4>Total Reps</h4>
            </div>
            <div className="card-value">
              <span className="big-number">0</span>
              <span className="value-label">repetitions</span>
            </div>
            <div className="card-footer">
              <span className="trend neutral">Do your first rep!</span>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <span className="card-icon-small">⚡</span>
              <h4>Avg Accuracy</h4>
            </div>
            <div className="card-value">
              <span className="big-number">-</span>
              <span className="value-label">%</span>
            </div>
            <div className="card-footer">
              <span className="trend neutral">Calculated after first workout</span>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <span className="card-icon-small">🎯</span>
              <h4>Current Streak</h4>
            </div>
            <div className="card-value">
              <span className="big-number">0</span>
              <span className="value-label">days</span>
            </div>
            <div className="card-footer">
              <span className="trend neutral">Train daily to build streak!</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* <!-- Profile Setup Modal --> */}
    {/* <div v-if="showProfileSetup" className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>🤖 Setup Your AI Profile</h2>
          <button className="close-btn">✕</button>
        </div>
        <div className="modal-body">
          <p className="modal-intro">Help AI personalize your workout experience</p>

          <div className="form-group">
            <label>Age</label>
            <input type="number" v-model="profile.age" placeholder="25" />
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input type="number" v-model="profile.weight" placeholder="70" />
          </div>

          <div className="form-group">
            <label>Height (cm)</label>
            <input type="number" v-model="profile.height" placeholder="175" />
          </div>

          <div className="form-group">
            <label>Fitness Level</label>
            <select v-model="profile.level">
              <option value="">Select level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label>Weekly Training Frequency</label>
            <select v-model="profile.frequency">
              <option value="">Select frequency</option>
              <option value="2">2 times per week</option>
              <option value="3">3 times per week</option>
              <option value="4">4 times per week</option>
              <option value="5">5 times per week</option>
              <option value="6">6 times per week</option>
              <option value="7">Daily (7 times)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Primary Goal</label>
            <select v-model="profile.goal">
              <option value="">Select goal</option>
              <option value="strength">Build Strength</option>
              <option value="endurance">Improve Endurance</option>
              <option value="weight-loss">Weight Loss</option>
              <option value="muscle">Build Muscle</option>
              <option value="general">General Fitness</option>
            </select>
          </div>

          <button className="submit-btn">
            <span>💾 Save Profile & Start Training</span>
          </button>
        </div>
      </div>
    </div> */}
  </div>
    );
};

export default DashboardPage;