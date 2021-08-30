using Microsoft.AspNetCore.Cors;
using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace PilMoney.Controllers
{
    [RoutePrefix("api/inversiones")]
    public class InversionesController : ApiController
    {
        // GET: api/Inversiones
        [HttpGet]
        public IHttpActionResult Get()
        {
            GestorInversiones gInversion = new GestorInversiones();
            List<Inversiones> l = gInversion.ListarInversiones();
            return Ok(l);
        }

        // GET: api/Inversiones/5
       [HttpGet]
        public Inversiones Get(int id)
        {
            GestorInversiones gInversion = new GestorInversiones();
            return gInversion.ObtenerInversionPorId(id);
        }

        // POST: api/Inversiones
      [HttpPost]
        public HttpResponseMessage Post(Inversiones i)
        {
            if (ModelState.IsValid)
            {
                GestorInversiones gInversion = new GestorInversiones();
                gInversion.RegistrarInversion(i);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // PUT: api/Inversiones/5


        // DELETE: api/Inversiones/5
        [HttpDelete]
        public void Delete(int id)
        {
            GestorInversiones gInversion = new GestorInversiones();
            gInversion.EliminarInversion(id);
        }
    }
}
