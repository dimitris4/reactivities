using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistance;

namespace Application.Activities
{
    public class Create
    {
        // commands do not return anything, queries do return something
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                // adding the activity in memory, we are not touching the database, we are sending to memory
                _context.Activities.Add(request.Activity);

                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}