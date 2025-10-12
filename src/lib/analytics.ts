export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    // Add your analytics provider here (Google Analytics, Plausible, etc.)
    console.log('Analytics event:', eventName, properties);
  }
}

// Usage examples:
export const Analytics = {
  contactFormSubmit: () => trackEvent('contact_form_submit'),
  projectView: (projectId: string) => trackEvent('project_view', { projectId }),
  serviceClick: (service: string) => trackEvent('service_click', { service }),
};


