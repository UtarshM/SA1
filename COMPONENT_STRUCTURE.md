# Component Structure & Mapping

## 📁 Current Component Structure

```
src/
├─ components/
│   ├─ Header.tsx              ✅ Implemented
│   ├─ Footer.tsx              ✅ Implemented
│   ├─ SEOHead.tsx             ✅ Implemented (via Helmet)
│   ├─ CohortTimeline.tsx      ✅ Implemented
│   ├─ ErrorBoundary.tsx       ✅ Implemented
│   ├─ LoadingSpinner.tsx      ✅ Implemented
│   ├─ PageTransition.tsx      ✅ Implemented
│   └─ ScrollToTop.tsx         ✅ Implemented
│
├─ pages/
│   ├─ Home.tsx                ✅ Implemented
│   ├─ Programs.tsx            ✅ Implemented
│   ├─ About.tsx               ✅ Implemented
│   ├─ Contact.tsx             ✅ Implemented
│   ├─ Blog.tsx                ✅ Implemented
│   ├─ BlogPost.tsx            ✅ Implemented
│   ├─ Terms.tsx               ✅ Implemented
│   ├─ Privacy.tsx             ✅ Implemented
│   ├─ Disclaimer.tsx          ✅ Implemented
│   └─ NotFound.tsx            ✅ Implemented
│
├─ services/
│   └─ wordpress.ts            ✅ Implemented
│
└─ utils/
    └─ sitemap.ts              ✅ Implemented
```

---

## 🧩 HOME PAGE COMPONENT MAPPING

### Current Implementation (Home.tsx)

The Home page is implemented as a single component with inline sections. Here's the mapping:

```tsx
Home.tsx
├─ <Helmet>                    // SEO Head
├─ Hero Section                // HeroSection equivalent
├─ Cohort Limit Section        // CohortLimit equivalent
├─ Who This Is For             // WhoItsFor equivalent
├─ Our Approach                // OurApproach equivalent
├─ AI Cohort Programs          // CohortsOverview equivalent
├─ How Cohorts Work            // HowCohortsWork equivalent
└─ Final CTA                   // FinalCTA equivalent
```

### Section Breakdown

#### 1. Hero Section
**Location:** Lines 15-40 in Home.tsx
**Content:**
- H1: "Practical AI Learning Through Structured Cohorts"
- Sub-heading: Calm AI-only explanation
- Supporting text: "Cohort-based learning • Practical exposure • Limited seats per batch"
- CTAs: "View AI Cohorts" + "Request Program Details"

#### 2. Cohort Limit Section
**Location:** Lines 42-58 in Home.tsx
**Content:**
- Icon: Users icon
- Heading: "Limited Cohort Size for Focused Learning"
- Text: "Each cohort is limited to 100 learners only..."
- Style: Blue background with border

#### 3. Who This Is For
**Location:** Lines 60-95 in Home.tsx
**Content:**
- Heading: "Who These Cohorts Are Designed For"
- 3 cards with icons:
  - Learners starting their AI journey
  - Students and professionals exploring applied AI
  - Individuals seeking structured, guided AI learning

#### 4. Our Approach
**Location:** Lines 97-145 in Home.tsx
**Content:**
- 3 gradient cards:
  - Practical Focus (Blue)
  - Structured Learning (Purple)
  - Honest Scope (Green)

#### 5. AI Cohort Programs
**Location:** Lines 147-280 in Home.tsx
**Content:**
- 2 cohort cards (Foundation & Applied)
- Each card includes:
  - Emoji icon (🧠 / ⚙️)
  - Title and description
  - What You Will Learn (4 items)
  - Duration and Fee
  - Seat limit badge
  - CTA button

#### 6. How Cohorts Work
**Location:** Lines 282-310 in Home.tsx
**Content:**
- 5-step process
- Numbered cards
- Gray background

#### 7. Final CTA
**Location:** Lines 312-330 in Home.tsx
**Content:**
- Gradient background (blue to purple)
- Heading: "Interested in Joining an Upcoming Cohort?"
- CTA: "Request Program Details"

---

## 🧩 PROGRAMS PAGE COMPONENT MAPPING

### Current Implementation (Programs.tsx)

```tsx
Programs.tsx
├─ <Helmet>                    // SEO Head
├─ Hero Section                // ProgramHero
├─ Cohorts Section             // CohortCard (reusable)
├─ How Cohorts Work            // Process steps
├─ CohortTimeline              // Timeline component
└─ Final CTA                   // CTA section
```

### Section Breakdown

#### 1. Program Hero
**Location:** Lines 15-30 in Programs.tsx
**Content:**
- H1: "AI Learning Cohorts"
- Intro: "Scalezix Academy offers two structured AI learning cohorts..."

#### 2. Cohort Cards
**Location:** Lines 32-120 in Programs.tsx
**Content:**
- 2 cohort cards (mapped from array)
- Each card is a reusable structure:
  - Icon and title
  - Description
  - What You Will Learn (4 items with checkmarks)
  - Duration and Fee grid
  - Seat limit badge
  - CTA button

#### 3. How Cohorts Work
**Location:** Lines 122-150 in Programs.tsx
**Content:**
- 5-step process
- Numbered cards

#### 4. Cohort Timeline
**Location:** Lines 152+ in Programs.tsx
**Component:** `<CohortTimeline />`
**Content:**
- 4 phases with timeline visualization
- Desktop: Vertical timeline with dots
- Mobile: Stacked cards
- Bottom note about timeline flexibility

---

## 🎨 REUSABLE COMPONENTS

### CohortTimeline Component

**File:** `src/components/CohortTimeline.tsx`

**Props:**
```tsx
interface CohortTimelineProps {
  cohortType?: 'foundation' | 'applied';
}
```

**Structure:**
```tsx
CohortTimeline
├─ Heading: "Cohort Learning Timeline"
├─ Desktop View (hidden on mobile)
│   ├─ Vertical line
│   └─ 4 phase cards with timeline dots
├─ Mobile View (hidden on desktop)
│   └─ 4 stacked cards with numbers
└─ Bottom Note: Timeline flexibility disclaimer
```

**Phases:**
1. Phase 1 — Orientation & Fundamentals (Weeks 1–2)
2. Phase 2 — Core Learning Modules (Mid-program)
3. Phase 3 — Practical Application (Later phase)
4. Phase 4 — Consolidation & Completion (Final weeks)

**Usage:**
```tsx
import CohortTimeline from '../components/CohortTimeline';

// In your component
<CohortTimeline cohortType="foundation" />
// or
<CohortTimeline cohortType="applied" />
```

---

## 🔄 POTENTIAL REFACTORING (Optional)

If you want to break down Home.tsx into smaller components:

### Suggested Structure
```
src/
├─ components/
│   ├─ home/
│   │   ├─ HeroSection.tsx
│   │   ├─ CohortLimit.tsx
│   │   ├─ WhoItsFor.tsx
│   │   ├─ OurApproach.tsx
│   │   ├─ CohortsOverview.tsx
│   │   ├─ HowCohortsWork.tsx
│   │   └─ FinalCTA.tsx
│   └─ programs/
│       ├─ ProgramHero.tsx
│       └─ CohortCard.tsx
```

### Benefits of Refactoring
- ✅ Easier to maintain
- ✅ Reusable components
- ✅ Better code organization
- ✅ Easier testing

### When to Refactor
- When components exceed 300 lines
- When you need to reuse sections
- When multiple developers work on the same file
- When you want to A/B test sections

### Current Status
**Not necessary right now** - The current implementation is clean and works well. Refactor only if needed.

---

## 📊 COMPONENT COMPLEXITY

### Simple Components (< 100 lines)
- ✅ About.tsx
- ✅ Disclaimer.tsx
- ✅ Terms.tsx
- ✅ Privacy.tsx
- ✅ NotFound.tsx

### Medium Components (100-300 lines)
- ✅ Programs.tsx
- ✅ Contact.tsx
- ✅ Blog.tsx
- ✅ CohortTimeline.tsx

### Complex Components (> 300 lines)
- ✅ Home.tsx (400+ lines)
- ✅ BlogPost.tsx (350+ lines)

**Note:** Complex components are acceptable when they represent a single page with multiple sections.

---

## 🎯 COMPONENT USAGE GUIDE

### Header Component
**Used on:** All pages (via App.tsx layout)
**Props:** None
**Features:**
- Responsive navigation
- Mobile menu
- CTA button: "Request Program Details"

### Footer Component
**Used on:** All pages (via App.tsx layout)
**Props:** None
**Features:**
- Entity name: Scalezix Ventures LLP
- Quick links
- Legal links
- Social links (if configured)

### CohortTimeline Component
**Used on:** Programs.tsx
**Props:** `cohortType?: 'foundation' | 'applied'`
**Features:**
- Responsive timeline
- 4 learning phases
- Desktop: Vertical timeline
- Mobile: Stacked cards

### SEO (Helmet)
**Used on:** All pages
**Props:** Via Helmet component
**Features:**
- Dynamic meta titles
- Meta descriptions
- Canonical URLs
- Open Graph tags
- Twitter Card tags

---

## ✅ IMPLEMENTATION STATUS

### Fully Implemented
- ✅ All 10 pages
- ✅ Header with navigation
- ✅ Footer with entity name
- ✅ CohortTimeline component
- ✅ SEO optimization
- ✅ Responsive design
- ✅ WordPress blog integration

### Ready to Use
- ✅ All components are production-ready
- ✅ No refactoring needed immediately
- ✅ Clean, maintainable code
- ✅ Follows React best practices

---

## 📝 NOTES

### Current Approach
The current implementation uses **page-level components** with inline sections. This is:
- ✅ Simple and straightforward
- ✅ Easy to understand
- ✅ Fast to develop
- ✅ Good for small teams

### Alternative Approach
You could refactor into **smaller, reusable components**. This is:
- ✅ More modular
- ✅ Better for large teams
- ✅ Easier to test
- ⚠️ More files to manage

**Recommendation:** Keep current structure unless you need to reuse sections across multiple pages.

---

**All components are implemented and ready to use!**
