using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class DepositosController : ApiController
    {
        // GET: api/Depositos
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Depositos/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Depositos
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Depositos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Depositos/5
        public void Delete(int id)
        {
        }
    }
}
