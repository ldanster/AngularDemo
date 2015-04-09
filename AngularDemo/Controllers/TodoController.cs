using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularDemo.Models;

namespace AngularDemo.Controllers
{
    public class TodoController : ApiController
    {
        private static List<Item> TodoList { get; set; }

        static TodoController()
        {
            TodoList = new List<Item> {new Item {Id = 1, Name = "Demo Item", IsComplete = false}};
        }

        // GET api/todo
        public IEnumerable<Item> Get()
        {
            return TodoList;
        }

        // GET api/todo/5
        public Item Get(int id)
        {
            return TodoList.Find(o => o.Id == id);
        }

        // POST api/todo
        public IEnumerable<Item> Post([FromBody]Item item)
        {
            if (item.Id == 0)
            {
                item.Id = TodoList.Count + 1;
                TodoList.Add(item);
            }
            else
            {
                TodoList.Find(o => o.Id == item.Id).IsComplete = item.IsComplete;
            }

            return TodoList;
        }
    }
}
