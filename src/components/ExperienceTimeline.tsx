
import { Clock, Building, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import experience from '../data/experience.json';

const TimelineItem = ({ 
  title, 
  subtitle, 
  period, 
  location, 
  description, 
  achievements,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  icon: React.ElementType;
}) => {
  return (
    <div className="animate-on-scroll mb-12 relative pl-8">
      <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
        <Icon size={14} className="text-primary-foreground" />
      </div>
      
      <div className="absolute left-2 top-5 bottom-0 w-1 bg-muted" />
      
      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
              <p className="text-muted-foreground">{subtitle}</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1">
              <CalendarDays size={14} />
              {period}
            </Badge>
          </div>
          <Badge variant="secondary" className="mt-1 flex items-center w-fit gap-1">
            <Building size={14} />
            {location}
          </Badge>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <h4 className="font-medium mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

const ExperienceTimeline = () => {
  return (
    <section className="py-20" id="experience">
      <div className="section-container">
        <h2 className="section-title mb-8 animate-on-scroll">Work Experience</h2>
        <div className="relative pt-8">
          {experience.map((job) => (
            <TimelineItem
              key={job.id}
              title={job.title}
              subtitle={job.company}
              period={job.period}
              location={job.location}
              description={job.description}
              achievements={job.achievements}
              icon={Clock}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
