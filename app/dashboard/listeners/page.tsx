'use client';

import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import { useState } from 'react';

export default function Listeners() {
  const [tabValue, setTabValue] = useState('overview');
  return (
    <div className="flex flex-col w-full items-start justify-start py-12 px-8">
      <div className="w-full max-w-3xl space-y-8">
        {/* Tabs for Navigation */}
        <Tabs.Root
          value={tabValue}
          onValueChange={setTabValue}
          className="w-full"
        >
          <Tabs.List className="flex space-x-6">
            <Tabs.Trigger
              value="overview"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200"
            >
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger
              value="features"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200"
            >
              Features
            </Tabs.Trigger>
            <Tabs.Trigger
              value="faq"
              className="text-lg font-semibold text-gray-300 hover:text-white transition-all duration-200"
            >
              FAQ
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview" className="p-6">
            <h2 className="text-2xl font-semibold text-gray-200">Overview</h2>
            <p className="text-gray-400 mt-4">
              This application provides a comprehensive data explorer for all users. It's designed to manage large data sets efficiently, with visualizations, filtering, and export features.
            </p>
          </Tabs.Content>
          <Tabs.Content value="features" className="p-6">
            <h2 className="text-2xl font-semibold text-gray-200">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Interactive Charts</li>
              <li>Data Filtering</li>
              <li>Real-time Updates</li>
              <li>Customizable Reports</li>
            </ul>
          </Tabs.Content>
          <Tabs.Content value="faq" className="p-6">
            <h2 className="text-2xl font-semibold text-gray-200">Frequently Asked Questions</h2>
            {/* Accordion for FAQ */}
            <Accordion.Root type="single" collapsible className="space-y-4">
              <Accordion.Item value="q1">
                <Accordion.Trigger className="p-4 text-xl font-medium text-gray-300 hover:text-white transition-all duration-200">
                  What is this application?
                </Accordion.Trigger>
                <Accordion.Content className="p-4 text-gray-300">
                  This application allows you to explore large datasets with various visualization and export options.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="q2">
                <Accordion.Trigger className="p-4 text-xl font-medium text-gray-300 hover:text-white transition-all duration-200">
                  How can I use the data explorer?
                </Accordion.Trigger>
                <Accordion.Content className="p-4 text-gray-300">
                  Simply upload your data file and use the interactive charts and filters to explore the data.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="q3">
                <Accordion.Trigger className="p-4 text-xl font-medium text-gray-300 hover:text-white transition-all duration-200">
                  Can I export my data?
                </Accordion.Trigger>
                <Accordion.Content className="p-4 text-gray-300">
                  Yes, the application supports exporting data in CSV, JSON, and Excel formats.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
