import React from "react";
import { sanity } from "@/sanity/lib/client";
import {
  PresentationChartLineIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default async function Stats() {
  const stats = await sanity.fetchStats();

  return (
    <div className="stats stats-vertical my-20 bg-base-300 lg:stats-horizontal lg:my-32">
      <div className="stat">
        <div className="stat-figure text-primary">
          <PresentationChartLineIcon className="h-8" />
        </div>
        <div className="stat-title">{stats[0].title}</div>
        <div className="stat-value text-primary">{stats[0].value}</div>
        <div className="stat-desc">{stats[0].subtitle}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <GlobeAltIcon className="h-8" />
        </div>
        <div className="stat-title">{stats[1].title}</div>
        <div className="stat-value text-secondary">{stats[1].value}</div>
        <div className="stat-desc">{stats[1].subtitle}</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="stat-value text-secondary">{stats[2].value}</div>
        <div className="stat-title text-secondary">{stats[2].title}</div>
        <div className="stat-desc text-secondary">{stats[2].subtitle}</div>
      </div>
    </div>
  );
}
