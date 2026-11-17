import { useState } from 'react';

type Category = 'all' | 'inside-track' | 'product-updates' | 'industry-insights' | 'co-authored';

const CATEGORY_LABELS: Record<string, string> = {
  'inside-track': 'Inside Track',
  'product-updates': 'Product Updates',
  'industry-insights': 'Industry Insights',
  'co-authored': 'Co-Authored',
};

const CATEGORY_STYLES: Record<string, string> = {
  'inside-track': 'bg-blue-100 text-blue-700',
  'product-updates': 'bg-purple-100 text-purple-700',
  'industry-insights': 'bg-green-100 text-green-700',
  'co-authored': 'bg-amber-100 text-amber-700',
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  'inside-track': 'from-blue-100 to-blue-50',
  'product-updates': 'from-purple-100 to-purple-50',
  'industry-insights': 'from-green-100 to-green-50',
  'co-authored': 'from-amber-100 to-amber-50',
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorTitle: string;
  publishDate: string;
  readTime: number;
  heroImage?: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).toUpperCase();
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className={`inline-block text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded ${CATEGORY_STYLES[category] ?? 'bg-gray-100 text-gray-600'}`}>
      {CATEGORY_LABELS[category] ?? category}
    </span>
  );
}

function HeroPlaceholder({ category }: { category: string }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${CATEGORY_GRADIENTS[category] ?? 'from-gray-100 to-gray-50'} flex items-center justify-center`}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    </div>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      <div className="aspect-video overflow-hidden bg-gray-50">
        {post.heroImage ? (
          <img
            src={post.heroImage}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <HeroPlaceholder category={post.category} />
        )}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-3">
          <CategoryBadge category={post.category} />
        </div>
        <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {getInitials(post.author)}
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-800">{post.author}</div>
              <div className="text-xs text-gray-400">{formatDate(post.publishDate)}</div>
            </div>
          </div>
          <span className="text-xs text-gray-400 font-medium">{post.readTime} MIN READ</span>
        </div>
      </div>
    </a>
  );
}

function PostRow({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group flex gap-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden p-4"
    >
      <div className="w-36 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
        {post.heroImage ? (
          <img src={post.heroImage} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <HeroPlaceholder category={post.category} />
        )}
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <div className="mb-1.5">
          <CategoryBadge category={post.category} />
        </div>
        <h2 className="text-base font-bold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
          {post.title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-3 mt-auto pt-2">
          <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {getInitials(post.author)}
          </div>
          <span className="text-xs font-semibold text-gray-700">{post.author}</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-400">{formatDate(post.publishDate)}</span>
          <span className="text-gray-300">·</span>
          <span className="text-xs text-gray-400">{post.readTime} min read</span>
        </div>
      </div>
    </a>
  );
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <rect x="1" y="2" width="14" height="2" rx="1" />
      <rect x="1" y="7" width="14" height="2" rx="1" />
      <rect x="1" y="12" width="14" height="2" rx="1" />
    </svg>
  );
}

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const availableCategories = Array.from(new Set(posts.map(p => p.category)));

  const filtered = activeCategory === 'all'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div>
      {/* Filter + view toggle bar */}
      <div className="flex items-center justify-between gap-4 mb-8 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
            }`}
          >
            All Posts
          </button>
          {availableCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as Category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
              }`}
            >
              {CATEGORY_LABELS[cat] ?? cat}
            </button>
          ))}
        </div>

        <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden">
          <button
            onClick={() => setView('grid')}
            aria-label="Grid view"
            className={`p-2.5 transition-colors ${view === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
          >
            <GridIcon />
          </button>
          <button
            onClick={() => setView('list')}
            aria-label="List view"
            className={`p-2.5 transition-colors ${view === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
          >
            <ListIcon />
          </button>
        </div>
      </div>

      {/* Post count */}
      <p className="text-sm text-gray-400 mb-6">
        {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
        {activeCategory !== 'all' && ` in ${CATEGORY_LABELS[activeCategory] ?? activeCategory}`}
      </p>

      {/* Posts grid or list */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">No posts in this category yet.</div>
      ) : view === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => <PostCard key={post.slug} post={post} />)}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map(post => <PostRow key={post.slug} post={post} />)}
        </div>
      )}
    </div>
  );
}
