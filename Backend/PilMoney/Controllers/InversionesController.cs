using PilMoney.Models;
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
        public IEnumerable<Inversiones> Get()
        {
            GestorInversiones gInversion = new GestorInversiones();
            return gInversion.ListarInversiones();
        }

        // GET: api/Inversiones/5
        public Inversiones Get(int idInversion)
        {
            GestorInversiones gInversion = new GestorInversiones();
            return gInversion.ObtenerInversionPorId(idInversion);
        }

        // POST: api/Inversiones
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
        public void Delete(int idInversion)
        {
            GestorInversiones gInversion = new GestorInversiones();
            gInversion.EliminarInversion(idInversion);
        }
    }
}
