using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class InversionesController : ApiController
    {
        // GET: api/Inversiones
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Inversiones/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Inversiones
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Inversiones/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Inversiones/5
        public void Delete(int id)
        {
        }
    }
}
