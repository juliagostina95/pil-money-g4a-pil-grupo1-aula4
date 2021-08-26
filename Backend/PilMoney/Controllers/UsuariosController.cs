using PilMoney.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PilMoney.Controllers
{
    public class UsuariosController : ApiController
    {
        // GET: api/Usuarios
       

        // GET: api/Usuarios/5
       
        // POST: api/Usuarios
        public void Post(Usuarios u)
        {
            GestorUsuarios gUsuarios = new GestorUsuarios();
            gUsuarios.RegistrarUsuario(u);
        }

        // PUT: api/Usuarios/5
        public void Put(Usuarios u)
        {
            GestorUsuarios gUsuarios = new GestorUsuarios();
            gUsuarios.ModificarUsuario(u);
        }

        // DELETE: api/Usuarios/5
       
    }
}
