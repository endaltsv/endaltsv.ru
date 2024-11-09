import { Badge } from './ui/badge';

export default function Skills() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Навыки</h2>
      <div className="flex flex-wrap gap-2">
        {[
          'JavaScript',
          'TypeScript',
          'React',
          'Node.js',
          'Python',
          'Django',
          'PostgreSQL',
          'MongoDB',
          'Docker',
          'REST APIs',
        ].map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </>
  );
}
