import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid/dist/mermaid.esm.min.mjs';

const SDMermaidDiagram = ({ chart, id = 'mermaid-chart', className = '' }) => {
  const chartRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!isInitialized) setIsInitialized(true);
  }, [isInitialized]);

  useEffect(() => {
    if (chartRef.current && chart && isInitialized) {
      const renderDiagram = async () => {
        try {
          // Clear previous content
          chartRef.current.innerHTML = '';
          
          // Check if dark mode is enabled
          const isDarkMode = document.documentElement.classList.contains('dark');

          mermaid.initialize({
            startOnLoad: false,
            theme: isDarkMode ? 'dark' : 'default',
            securityLevel: 'loose',
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: 14,
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
              curve: 'basis'
            },
            themeVariables: isDarkMode
              ? {
                  primaryColor: '#1e293b',
                  primaryTextColor: '#e2e8f0',
                  lineColor: '#a5b4fc',
                  tertiaryColor: '#0f172a',
                  edgeLabelBackground: '#1f2937'
                }
              : {
                  primaryColor: '#e0e7ff',
                  primaryTextColor: '#1f2937',
                  lineColor: '#6366f1',
                  tertiaryColor: '#f8fafc',
                  edgeLabelBackground: '#ffffff'
                }
          });
          
          // Create unique ID for this render
          const uniqueId = `${id}-${Date.now()}`;
          
          // Render the diagram
          const { svg } = await mermaid.render(uniqueId, chart);
          
          if (chartRef.current) {
            chartRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error);
          if (chartRef.current) {
            chartRef.current.innerHTML = `
              <div class="p-4 text-red-500 sd-neumorphic-card">
                <h3 class="font-bold mb-2">Diagram Rendering Error</h3>
                <p class="text-sm">Unable to render the diagram. Please refresh the page.</p>
                <details class="mt-2">
                  <summary class="cursor-pointer text-xs">Error details</summary>
                  <pre class="text-xs mt-2 whitespace-pre-wrap">${error.message}</pre>
                </details>
              </div>
            `;
          }
        }
      };

      renderDiagram();
    }
  }, [chart, id, isInitialized]);

  return (
    <div 
      ref={chartRef} 
      className={`mermaid-container sd-neumorphic-card p-6 overflow-x-auto ${className}`}
      id={id}
    />
  );
};

export default SDMermaidDiagram;
