
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import personal from '../data/personal.json';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(personal.skills[0].category);
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    // Reset animated skills when category changes
    setAnimatedSkills({});
    
    // Animate skills gradually
    const category = personal.skills.find(cat => cat.category === selectedCategory);
    
    if (category) {
      category.items.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [skill.name]: true
          }));
        }, index * 100);
      });
    }
  }, [selectedCategory]);

  return (
    <section id="skills" className="py-20">
      <div className="section-container" id="skills-section">
        <h2 className="section-title animate-on-scroll">Skills & Expertise</h2>
        
        <Tabs 
          defaultValue={personal.skills[0].category} 
          onValueChange={setSelectedCategory}
          className="animate-on-scroll"
        >
          <TabsList className="mb-8 flex flex-wrap">
            {personal.skills.map(category => (
              <TabsTrigger 
                key={category.category} 
                value={category.category}
              >
                {category.category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {personal.skills.map(category => (
            <TabsContent 
              key={category.category} 
              value={category.category}
              className="mt-0"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.category} Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {category.items.map(skill => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          {/* <span className="text-muted-foreground">
                            {animatedSkills[skill.name] ? `${skill.level}%` : '0%'}
                          </span> */}
                        </div>
                        {/* <Progress 
                          value={animatedSkills[skill.name] ? skill.level : 0} 
                          className="h-2 transition-all duration-1000 ease-out"
                        /> */}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
